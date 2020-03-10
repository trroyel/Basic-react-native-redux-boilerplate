import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import { Colors, Config, Strings } from '../../constants/';
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

const PostScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const posts = useSelector(state => state.posts.posts);
    const updatedAt = useSelector(state => state.posts.updatedAt);

    const dispatch = useDispatch();

    useEffect(() => {
        const delay = (Date.now() - updatedAt) / 1000;
        if (posts.length > 0 && delay <= Config.timeDelay) return;

        loadPosts(setLoading);
    }, [dispatch]);

    useEffect(() => {
        props.navigation.setParams({ loading: deleteLoading });
    }, [deleteLoading]);

    const loadPosts = async (callback) => {
        callback(true);
        await dispatch(fetchPosts());
        callback(false);
    };

    const handleRenderItem = ({ item }) => (
        <RenderListItem
            loading={deleteLoading}
            item={item}
            onDelete={handleDelete}
        />
    );

    const handleDelete = id => {
        Alert.alert(Strings.deleteAlertTitle, Strings.deleteAlertInstruction, [
            { text: Strings.no, style: "default" },
            {
                text: Strings.yes,
                style: "destructive",
                onPress: async () => {
                    setDeleteLoading(true);
                    await dispatch(deletePost(id));
                    setDeleteLoading(false);
                }
            }
        ]);
    };


    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={posts}
                keyExtractor={item => 'key' + item.id}
                renderItem={handleRenderItem}
                initialNumToRender={12}
                maxToRenderPerBatch={15}
                refreshing={refreshing}
                removeClippedSubviews={true}
                onRefresh={() => loadPosts(setRefreshing)}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title={Strings.postScreenFlatlistHeaderTitle} />}
            />
        </View>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const loading = navigation.getParam('loading');

    return {
        title: Strings.postScreenNavTitle,
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
                loading={loading}
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

export default PostScreen;