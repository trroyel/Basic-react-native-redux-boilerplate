import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home/HomeScreen';
import DefaultNavigationOption from './DefaultNavigationOption';
import { home } from '../constants/Icons';

const HomeNavigator = createStackNavigator({
    Home: HomeScreen
}, {
    navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{ height: 30, width: 30, tintColor: tintColor }}
                source={home}
            />
        )
    },
    defaultNavigationOptions: DefaultNavigationOption
}
);

export default HomeNavigator;