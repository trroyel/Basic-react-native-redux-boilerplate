import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert, ToastAndroid } from 'react-native';

import Colors from '../../constants/Colors';
import { timeDelay } from '../../constants/Config';
import { menu, plus } from '../../constants/Icons';
import { fetchIncomes, deleteIncome } from '../../store/actions/incomes';
import {
    ListHeader,
    HeaderButton,
    RenderListItem,
    LoadingIndicator,
    ListItemSeparator,
    ListEmptyComponent
} from '../../components/ui';

const IncomeScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const updated = useSelector(state => state.incomes.updated);
    const incomes = useSelector(state => state.incomes.incomes);

    const dispatch = useDispatch();

    useEffect(() => {
        const delay = (Date.now() - updated) / 1000;
        if (incomes.length > 0 && delay <= timeDelay) return;

        loadIncomes(setLoading);
    }, [dispatch]);


    const loadIncomes = async (callback) => {
        try {
            callback(true);
            await dispatch(fetchIncomes());
            callback(false);
        } catch (error) {
            callback(false);
            showError(error.message)
        }
    };

    const showError = message => {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.TOP
        );
    };

    const handleDelete = id => {
        Alert.alert('Are u sure?', 'press ok if you really want to delete', [
            { text: 'No', style: "default" },
            {
                text: 'Yes',
                style: "destructive",
                onPress: () => dispatch(deleteIncome(id))
            }
        ]);
    };


    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={incomes}
                keyExtractor={item => 'key' + item.id}
                renderItem={({ item }) => (
                    <RenderListItem
                        item={item}
                        onDelete={handleDelete}
                    />
                )}
                initialNumToRender={12}
                maxToRenderPerBatch={15}
                refreshing={refreshing}
                removeClippedSubviews={true}
                onRefresh={() => loadIncomes(setRefreshing)}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title="Income List" />}
            />
        </View>
    );
};

IncomeScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Income',
        headerLeft: (
            <HeaderButton
                icon={menu}
                size={24}
                color={Colors.secondary}
                onPress={() => navigation.toggleDrawer()}
            />
        ),
        headerRight: (
            <HeaderButton
                icon={plus}
                size={20}
                color={Colors.secondary}
                onPress={() => navigation.navigate('AddIncome')}
            />
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.secondary
    },
    container: {
        margin: 10,
        paddingHorizontal: 10
    }
});
export default IncomeScreen;