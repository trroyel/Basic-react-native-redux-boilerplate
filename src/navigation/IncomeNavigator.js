import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { income } from '../constants/Icons';
import IncomeScreen from '../screens/incomes/IncomeScreen';
import DefaultNavigationOption from './DefaultNavigationOption';
import AddIncomeScreen from '../screens/incomes/AddIncomeScreen';

const IncomeNavigator = createStackNavigator({
    Income: IncomeScreen,
    AddIncome: AddIncomeScreen
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

export default IncomeNavigator;