import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { todoIcon } from '../../constants/Icons';
import { addTodo } from '../../store/actions/todos';
import { MainButton, InputTextWithIcon } from '../../components/ui';

const AddTodoScreen = props => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        setLoading(true);
        await dispatch(addTodo({
            userId: 1,
            title: title,
            completed: completed
        }));
        setLoading(false);
        props.navigation.popToTop();
    };

    return (
        <View style={styles.screen}>
            <InputTextWithIcon
                autoFocus
                icon={todoIcon}
                value={title}
                label="Enter title"
                placeholder="Title"
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={todoIcon}
                value={completed}
                label="Enter completion status"
                placeholder="Completion status"
                onChangeText={setCompleted}
            />

            <MainButton
                disabled = {loading}
                loading={loading}
                title="ADD"
                onPress={handleSubmit}
            />
        </View>
    );
};

AddTodoScreen.navigationOptions = {
    title: 'Add Todo'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default AddTodoScreen;