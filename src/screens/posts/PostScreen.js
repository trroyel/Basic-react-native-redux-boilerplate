import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import Colors from '../../constants/Colors';
import { timeDelay } from '../../constants/Config';
import { menuIcon, plusIcon } from '../../constants/Icons';
import { fetchPosts, deletePost } from '../../store/actions/posts';
import {
    ListHeader,
    HeaderButton,
    RenderListItem,
    LoadingIndicator,
    ListItemSeparator,
    ListEmptyComponent
} from '../../components/ui';

const postsScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const updated = useSelector(state => state.posts.updated);
    const posts = useSelector(state => state.posts.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        const delay = (Date.now() - updated) / 1000;
        if (posts.length > 0 && delay <= timeDelay) return;

        loadPosts(setLoading);
    }, [dispatch]);


    const loadPosts = async (callback) => {
        callback(true);
        await dispatch(fetchPosts());
        callback(false);
    };

    const handleDelete = id => {
        Alert.alert('Are u sure?', 'press ok if you really want to delete', [
            { text: 'No', style: "default" },
            {
                text: 'Yes',
                style: "destructive",
                onPress: () => dispatch(deletePost(id))
            }
        ]);
    };


    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={posts}
                keyExtractor={item => 'key' + item.id}
                renderItem={({ item }) => (
                    <RenderListItem
                        item={item}
                        onDelete={handleDelete}
                    />
                )}
                initialNumToRender={12}
                maxToRenderPerBatch={15}
                refreshing={refreshing}
                removeClippedSubviews={true}
                onRefresh={() => loadPosts(setRefreshing)}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title="Posts List" />}
            />
        </View>
    );
};

postsScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Posts',
        headerLeft: (
            <HeaderButton
                icon={menuIcon}
                size={24}
                color={Colors.secondary}
                onPress={() => navigation.toggleDrawer()}
            />
        ),
        headerRight: (
            <HeaderButton
                icon={plusIcon}
                size={20}
                color={Colors.secondary}
                onPress={() => navigation.navigate('AddPost')}
            />
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.secondary
    },
    container: {
        margin: 10,
        paddingHorizontal: 10
    }
});
export default postsScreen;