import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { postIcon } from '../../constants/Icons';
import { AppRoutes, Strings } from '../../constants';
import { setNextRoute } from '../../store/actions/auth';
import { setPreviewPost } from '../../store/actions/posts';
import { ButtonWithIcon, InputTextWithIcon } from '../../components/ui';

const AddPostScreen = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { isAuthenticated, userProfile } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const { navigate } = props.navigation;
        dispatch(setPreviewPost({ title, body }));

        if (isAuthenticated && userProfile !== null) {
            navigate(AppRoutes.PostPreview);
        } else if (isAuthenticated && userProfile === null) {
            dispatch(setNextRoute(AppRoutes.PostPreview));
            navigate(AppRoutes.PostAddProfile);
        } else {
            dispatch(setNextRoute(AppRoutes.PostPreview));
            navigate(AppRoutes.PostAuthenticate);
        }
    };

    return (
        <View style={styles.screen}>
            <InputTextWithIcon
                autoFocus
                icon={postIcon}
                value={title}
                label={Strings.addPostInputTitleLabel}
                placeholder={Strings.addPostInputTitlePlaceholder}
                onChangeText={setTitle}
            />
            <InputTextWithIcon
                icon={postIcon}
                value={body}
                multiline
                label={Strings.addPostInputBodyLabel}
                placeholder={Strings.addPostInputBodyPlaceholder}
                onChangeText={setBody}
            />

            <ButtonWithIcon
                title={Strings.add}
                icon="md-add"
                onPress={handleSubmit}
            />
        </View>
    );
};

AddPostScreen.navigationOptions = {
    title: Strings.addPostScreenNavTitle
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default AddPostScreen;