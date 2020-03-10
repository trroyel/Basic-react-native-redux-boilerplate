import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch , useSelector} from 'react-redux';

import Strings from '../../constants/Strings';
import { postIcon } from '../../constants/Icons';
import { addPost, setPreviewPost } from '../../store/actions/posts';
import { ButtonWithIcon, InputTextWithIcon } from '../../components/ui';
import { ApiRoutes, AppRoutes } from '../../constants';

const AddPostScreen = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

    const authData = useSelector(state=> state.auth);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        // if(authData.isAuthenticated && authData.userProfile !== null){
        //     setLoading(true);
        //     await dispatch(addPost({
        //         userId: 1,
        //         title: title,
        //         body: body
        //     }));
        //     setLoading(false);
        //     props.navigation.popToTop();
        // }else{

            dispatch(setPreviewPost({title, body}));
            props.navigation.navigate(AppRoutes.PostPreview);
        //}
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
                loading={loading}
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