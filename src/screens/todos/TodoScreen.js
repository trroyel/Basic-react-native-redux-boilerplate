import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import Colors from '../../constants/Colors';
import { timeDelay } from '../../constants/Config';
import { menuIcon, plusIcon } from '../../constants/Icons';
import { fetchTodos, deleteTodo } from '../../store/actions/todos';
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

    const updated = useSelector(state => state.todos.updated);
    const todos = useSelector(state => state.todos.todos);

    const dispatch = useDispatch();

    useEffect(() => {
        const delay = (Date.now() - updated) / 1000;
        if (todos.length > 0 && delay <= timeDelay) return;

        loadTodos(setLoading);
    }, [dispatch]);

    //Load expenses data from actions
    const loadTodos = async (callback) => {
        callback(true);
        await dispatch(fetchTodos());
        callback(false);
    };

    const handleDelete = id => {
        Alert.alert('Are u sure?', 'press ok if you really want to delete', [
            { text: 'No', style: "default" },
            {
                text: 'Yes',
                style: "destructive",
                onPress: () => dispatch(deleteTodo(id))
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


    if (loading) return <LoadingIndicator />

    return (
        <View style={styles.screen}>
            <FlatList
                data={todos}
                keyExtractor={item => 'key' + item.id}
                renderItem={({ item }) => (
                    <RenderListItem
                        item={item}
                        onDelete={handleDelete}
                    />
                )}
                initialNumToRender={20}
                maxToRenderPerBatch={30}
                refreshing={refreshing}
                removeClippedSubviews={true}
                getItemLayout={handleItemLayout}
                onRefresh={() => loadTodos(setRefreshing)}
                ListEmptyComponent={ListEmptyComponent}
                ItemSeparatorComponent={ListItemSeparator}
                ListHeaderComponent={<ListHeader title="Todo List" />}
            />
        </View>
    );
};

TodoScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Todos',
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
                onPress={() => navigation.navigate('AddTodo')}
            />
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