import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { income } from '../../constants/Icons';
import { addIncome } from '../../store/actions/posts';
import { MainButton, InputTextWithIcon } from '../../components/ui';

const AddIncomeScreen = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        await dispatch(addIncome({
            userId: 1,
            title: title,
            body: body
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
                placeholder="Post title"
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={income}
                value={body}
                label="Enter body"
                placeholder="Post body"
                onChangeText={setBody}
            />

            <MainButton
                title="ADD"
                onPress={() => handleSubmit()}
            />
        </View>
    );
};

AddIncomeScreen.navigationOptions = {
    title: 'Add Posts'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default AddIncomeScreen;