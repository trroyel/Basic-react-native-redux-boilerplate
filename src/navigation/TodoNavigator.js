import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { todoIcon } from '../constants/Icons';
import TodoScreen from '../screens/todos/TodoScreen';
import AddTodoScreen from '../screens/todos/AddTodoScreen';
import DefaultNavigationOption from './DefaultNavigationOption';


const TodoNavigator = createStackNavigator({
    TodosHome: TodoScreen,
    AddTodo: AddTodoScreen
}, {
    navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                style={{ height: 30, width: 30, tintColor: tintColor }}
                source={todoIcon}
            />
        )
    },
    defaultNavigationOptions: DefaultNavigationOption
}
);

export default TodoNavigator;