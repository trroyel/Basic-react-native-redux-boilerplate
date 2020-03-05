import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { postIcon } from '../constants/Icons';
import PostScreen from '../screens/posts/PostScreen';
import AddPostScreen from '../screens/posts/AddPostScreen';
import DefaultNavigationOption from './DefaultNavigationOption';

const PostNavigator = createStackNavigator({
    Posts: PostScreen,
    AddPost: AddPostScreen
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

export default PostNavigator;