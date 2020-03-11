import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { postIcon } from '../constants/Icons';
import AuthScreen from '../screens/auth/AuthScreen';
import ProfileScreen from '../screens/auth/ProfileScreen';
import AddProfileScreen from '../screens/auth/AddProfileScreen';
import DefaultNavigationOption from './DefaultNavigationOption';

const AuthNavigator = createStackNavigator({
    ProfileHome: ProfileScreen,
    Authenticate: AuthScreen,
    AddProfile: AddProfileScreen
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