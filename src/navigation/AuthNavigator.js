import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { postIcon } from '../constants/Icons';
import AuthScreen from '../screens/auth/AuthScreen';
import ProfileScreen from '../screens/auth/ProfileScreen';
import DefaultNavigationOption from './DefaultNavigationOption';

const AuthNavigator = createStackNavigator({
    AuthHome: AuthScreen,
    Profile: ProfileScreen
}, {
    navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{ height: 30, width: 30, tintColor: tintColor }}
                source={postIcon}
            />
        )
    },
    defaultNavigationOptions: DefaultNavigationOption
});

export default AuthNavigator;