import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { income } from '../../constants/Icons';
import { addIncome } from '../../store/actions/incomes';
import { MainButton, InputTextWithIcon } from '../../components/ui';

const AddIncomeScreen = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        console.log('Title: ', title, " Body: ", body);
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
                placeholder="Today's post"
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={income}
                value={body}
                label="Enter body"
                placeholder="Today's post"
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
    title: 'Add Income'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default AddIncomeScreen;