import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import { menu, plus } from '../../constants/Icons';
import { fetchExpenses } from '../../store/actions/expenses';
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
    const expenses = useSelector(state => state.expenses.expenses);

    const dispatch = useDispatch();

    useEffect(() => {
        if (expenses.length > 0) return;
        const loadExpenses = async () => {
            setLoading(true);
            await dispatch(fetchExpenses());
            setLoading(false);
        };
        loadExpenses();
    }, [dispatch]);

    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={expenses}
                keyExtractor={item=> String(item.id)}
                renderItem={RenderListItem}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title="Expense List"/>}
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