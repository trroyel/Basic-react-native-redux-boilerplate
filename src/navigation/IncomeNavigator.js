import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import IncomeScreen from '../screens/incomes/IncomeScreen';
import DefaultNavigationOption from './DefaultNavigationOption';
import { income } from '../constants/Icons';

const IncomeNavigator = createStackNavigator({
    Income: IncomeScreen
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