import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeNavigator from './HomeNavigator';
import TodoNavigator from './TodoNavigator';
import PostNavigator from './PostNavigator';

import Colors from '../constants/Colors';

const MainNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Posts: PostNavigator,
    Todos: TodoNavigator
}, {
    unmountInactiveRoutes: true,
    drawerBackgroundColor: Colors.primary,
    screenContainerStyle: {
        marginLeft: 29
    },
    contentOptions: {
        activeTintColor: Colors.secondary,
        inactiveTintColor: Colors.fade,
        labelStyle: {
            fontFamily: 'semi-bold',
            fontSize: 16,
        }
    }
});

export default createAppContainer(MainNavigator);