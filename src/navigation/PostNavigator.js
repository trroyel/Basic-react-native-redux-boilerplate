import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { postIcon } from '../constants/Icons';
import PostScreen from '../screens/posts/PostScreen';
import AddPostScreen from '../screens/posts/AddPostScreen';
import PostPreviewScreen from '../screens/posts/PostPreviewScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import AddProfileScreen from '../screens/auth/AddProfileScreen';
import DefaultNavigationOption from './DefaultNavigationOption';

const PostNavigator = createStackNavigator({
    PostsHome: PostScreen,
    AddPost: AddPostScreen,
    PostPreview: PostPreviewScreen,
    PostAddProfile: AddProfileScreen,
    PostAuthenticate: AuthScreen
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