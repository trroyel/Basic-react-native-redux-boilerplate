import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { income } from '../../constants/Icons';
import { addExpense } from '../../store/actions/todos';
import { MainButton, InputTextWithIcon } from '../../components/ui';

const AddTodoScreen = props => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        await dispatch(addExpense({
            userId: 1,
            title: title,
            completed: completed
        }));
        props.navigation.popToTop();
    };

    return (
        <View style={styles.screen}>
            <InputTextWithIcon
                autoFocus
                icon={income}
                value={title}
                label="Enter title"
                placeholder="Title"
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={income}
                value={completed}
                label="Enter completion status"
                placeholder="Completion status"
                onChangeText={setCompleted}
            />

            <MainButton
                title="ADD"
                onPress={() => handleSubmit()}
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