import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeNavigator from './HomeNavigator';
import IncomeNavigator from './IncomeNavigator';
import ExpenseNavigator from './ExpenseNavigator';

import Colors from '../constants/Colors';

const MainNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Incomes: IncomeNavigator,
    Expenses: ExpenseNavigator
}, {
    unmountInactiveRoutes: true,
    drawerBackgroundColor: Colors.primary,
    screenContainerStyle: {
        marginLeft: 29
    },
    contentOptions: {
        activeTintColor: Colors.secondary,
        inactiveTintColor: Colors.accent,
        labelStyle: {
            fontFamily: 'semi-bold',
            fontSize: 16,
        }
    }
});

export default createAppContainer(MainNavigator);