import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { postIcon } from '../../constants/Icons';
import { addPost } from '../../store/actions/posts';
import { ButtonWithIcon, InputTextWithIcon } from '../../components/ui';

const AddPostScreen = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        setLoading(true);
        await dispatch(addPost({
            userId: 1,
            title: title,
            body: body
        }));

        setLoading(false);
        props.navigation.popToTop();
    };

    return (
        <View style={styles.screen}>
            <InputTextWithIcon
                autoFocus
                icon={postIcon}
                value={title}
                label="Enter title"
                placeholder="Post title"
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={postIcon}
                value={body}
                label="Enter body"
                placeholder="Post body"
                onChangeText={setBody}
            />

            <ButtonWithIcon
                loading={loading}
                title="ADD"
                icon="md-add"
                onPress={handleSubmit}
            />
        </View>
    );
};

AddPostScreen.navigationOptions = {
    title: 'Add Posts'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default AddPostScreen;