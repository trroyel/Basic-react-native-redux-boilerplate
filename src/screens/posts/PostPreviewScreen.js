import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const PostPreviewScreen = props => {
    const post = useSelector(state => state.posts.previewPost);

    return (
        <View style={styles.screen}>
            <Text> {post.title || 'not found'}</Text>
            <Text> {post.body || 'not found'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default PostPreviewScreen;