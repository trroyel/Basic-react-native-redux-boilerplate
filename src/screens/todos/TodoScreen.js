import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { fetchTodos, deleteTodo } from '../../store/actions/todos';
import { Colors, Config, Strings, AppRoutes } from '../../constants/';

import {
    ListHeader,
    HeaderButton,
    RenderListItem,
    LoadingIndicator,
    ListItemSeparator,
    ListEmptyComponent,
} from '../../components/ui';


const TodoScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const todos = useSelector(state => state.todos.todos);
    const updatedAt = useSelector(state => state.todos.updatedAt);

    const dispatch = useDispatch();

    useEffect(() => {
        const delay = (Date.now() - updatedAt) / 1000;
        if (todos.length > 0 && delay <= Config.timeDelay) return;

        loadTodos(setLoading);
    }, [dispatch]);

    useEffect(() => {
        props.navigation.setParams({ loading: deleteLoading });
    }, [deleteLoading]);

    //Load expenses data from actions
    const loadTodos = async (callback) => {
        callback(true);
        await dispatch(fetchTodos());
        callback(false);
    };

    const handleDelete = id => {
        Alert.alert(Strings.deleteAlertTitle, Strings.deleteAlertInstruction, [
            { text: Strings.no, style: "default" },
            {
                text: Strings.yes,
                style: "destructive",
                onPress: async () => {
                    setDeleteLoading(true);
                    await dispatch(deleteTodo(id));
                    setDeleteLoading(false);
                }
            }
        ]);
    };

    const handleItemLayout = (data, index) => {
        return {
            length: 40.5,
            offset: 40.5 * index,
            index
        };
    };

    const handleRenderItem = ({ item }) => (
        <RenderListItem
            item={item}
            onDelete={handleDelete}
        />
    );

    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={todos}
                keyExtractor={item => 'key' + item.id}
                renderItem={handleRenderItem}
                initialNumToRender={20}
                maxToRenderPerBatch={30}
                refreshing={refreshing}
                removeClippedSubviews={true}
                getItemLayout={handleItemLayout}
                onRefresh={() => loadTodos(setRefreshing)}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title={Strings.todoScreenFlatlistHeaderTitle} />}
            />
        </View>
    );
};

TodoScreen.navigationOptions = ({ navigation }) => {
    const loading = navigation.getParam('loading');

    return {
        title: Strings.todoScreenNavTitle,
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
                    onPress={() => navigation.navigate(AppRoutes.AddTodo)}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.secondary
    }
});

export default TodoScreen;