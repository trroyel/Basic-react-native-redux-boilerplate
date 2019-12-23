import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import { menu,plus } from '../../constants/Icons';
import { fetchIncomes } from '../../store/actions/incomes';
import { HeaderButton, LoadingIndicator,ListHeader, ListEmptyComponent, RenderListItem, ListItemSeparator } from '../../components/ui';


const IncomeScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const incomes = useSelector(state => state.incomes.incomes);

    const dispatch = useDispatch();

    useEffect(() => {
        if (incomes.length > 0) return;
        const loadIncomes = async () => {
            setLoading(true);
            await dispatch(fetchIncomes());
            setLoading(false);
        };
        loadIncomes();
    }, [dispatch]);

    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={incomes}
                keyExtractor={(item) => 'key' + item.id}
                renderItem={RenderListItem}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title="Expense List"/>}
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