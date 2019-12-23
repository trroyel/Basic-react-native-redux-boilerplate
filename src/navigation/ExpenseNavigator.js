import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import ExpenseScreen from '../screens/expenses/ExpenseScreen';
import DefaultNavigationOption from './DefaultNavigationOption';
import { income } from '../constants/Icons';

const ExpenseNavigator = createStackNavigator({
    Expense: ExpenseScreen
}, {
    navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{ height: 30, width: 30, tintColor: tintColor }}
                source={income}
            />
        )
    },
    defaultNavigationOptions: DefaultNavigationOption
}
);

export default ExpenseNavigator;