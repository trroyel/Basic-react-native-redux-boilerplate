import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { fetchPosts, deletePost } from '../../store/actions/posts';
import { Colors, Config, Strings, AppRoutes } from '../../constants/';

import {
    ListHeader,
    HeaderButton,
    RenderListItem,
    ListItemSeparator,
    ListEmptyComponent
} from '../../components/ui';

const PostScreen = (props) => {
    const isMountedRef = useRef();
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const posts = useSelector(state => state.posts.posts);
    const updatedAt = useSelector(state => state.posts.updatedAt);

    useEffect(() => {
        isMountedRef.current = true;

        const delay = (Date.now() - updatedAt) / 1000;
        if (posts.length > 0 && delay <= Config.timeDelay) return;

        loadPosts(setLoading);

        return () => isMountedRef.current = false;
    }, [dispatch, isMountedRef]);


    useEffect(() => {
        props.navigation.setParams({ loading: loading });
    }, [loading]);

    const loadPosts = async (callback) => {
        callback(true);
        await dispatch(fetchPosts());
        if (isMountedRef.current) callback(false);
    };

    const handleRenderItem = ({ item }) => (
        <RenderListItem
            loading={loading}
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
                    setLoading(true);
                    console.log('Before: ', isMountedRef.current);
                    await dispatch(deletePost(id));
                    console.log('After: ', isMountedRef.current);
                    if (isMountedRef.current) setLoading(false);
                }
            }
        ]);
    };

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
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="md-menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName={loading ? 'md-radio-button-off' : 'md-add'}
                    onPress={() => navigation.navigate(AppRoutes.AddPost)}
                />
            </HeaderButtons>
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