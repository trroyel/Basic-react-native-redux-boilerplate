import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Strings from '../../constants/Strings';
import { todoIcon } from '../../constants/Icons';
import { addTodo } from '../../store/actions/todos';
import { ButtonWithIcon, InputTextWithIcon } from '../../components/ui';

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
                label={Strings.addTodoInputTitleLabel}
                placeholder={Strings.addTodoInputTitlePlaceholder}
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={todoIcon}
                value={completed}
                label={Strings.addTodoInputCompletionLabel}
                placeholder={Strings.addTodoInputCompletionPlaceholder}
                onChangeText={setCompleted}
            />

            <ButtonWithIcon
                title={Strings.add}
                loading={loading}
                onPress={handleSubmit}
            />
        </View>
    );
};

AddTodoScreen.navigationOptions = {
    title: Strings.addTodoScreenNavTitle
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default AddTodoScreen;