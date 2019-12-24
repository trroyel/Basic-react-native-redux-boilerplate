import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { expense } from '../constants/Icons';
import ExpenseScreen from '../screens/expenses/ExpenseScreen';
import DefaultNavigationOption from './DefaultNavigationOption';
import AddExpenseScreen from '../screens/expenses/AddExpenseScreen';

const ExpenseNavigator = createStackNavigator({
    Expense: ExpenseScreen,
    AddExpense: AddExpenseScreen
}, {
    navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{ height: 30, width: 30, tintColor: tintColor }}
                source={expense}
            />
        )
    },
    defaultNavigationOptions: DefaultNavigationOption
}
);

export default ExpenseNavigator;