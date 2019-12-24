import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import Colors from '../../constants/Colors';
import { timeDelay } from '../../constants/Config';
import { menu, plus } from '../../constants/Icons';
import { fetchExpenses, deleteExpense } from '../../store/actions/expenses';
import {
    ListHeader,
    HeaderButton,
    RenderListItem,
    LoadingIndicator,
    ListItemSeparator,
    ListEmptyComponent,
} from '../../components/ui';


const ExpenseScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const updated = useSelector(state => state.expenses.updated);
    const expenses = useSelector(state => state.expenses.expenses);

    const dispatch = useDispatch();

    useEffect(() => {
        const delay = (Date.now() - updated) / 1000;
        console.log('Time Delay [Expenses]: ', delay);

        if (expenses.length > 0 && delay <= timeDelay) return;
        const loadExpenses = async () => {
            setLoading(true);
            await dispatch(fetchExpenses());
            setLoading(false);
        };
        loadExpenses();
    }, [dispatch]);

    const handleDelete = id => {
        Alert.alert('Are u sure?', 'press ok if you really want to delete', [
            { text: 'No', style: "default" },
            {
                text: 'Yes',
                style: "destructive",
                onPress: () => dispatch(deleteExpense(id))
            }
        ]);
    };

    const handleRefresh = async () =>{
        setRefreshing(true);
        await dispatch(fetchExpenses());
        setRefreshing(false);
    }

    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={expenses}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <RenderListItem
                        item={item}
                        onDelete={handleDelete}
                    />
                )}
                initialNumToRender={12}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                maxToRenderPerBatch={25}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title="Expense List" />}
            />
        </View>
    );
};

ExpenseScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Expense',
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
                onPress={() => navigation.navigate('AddExpense')}
            />
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.secondary
    }
});

export default ExpenseScreen;