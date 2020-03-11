import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { addPost} from '../../store/actions/posts';
import { ButtonWithIcon } from '../../components/ui/';
import { Strings, Colors, Fonts, AppRoutes } from '../../constants/';

const PostPreviewScreen = props => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const post = useSelector(state => state.posts.previewPost);
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated);

    useEffect(()=>{
        if(!isAuthenticated){
            props.navigation.navigate(AppRoutes.PostAuthenticate);
        }
    },[isAuthenticated]);


    const handleSubmit = async () => {
        setLoading(true);
        await dispatch(addPost(post));
        setLoading(false);

        props.navigation.popToTop();
    };

    return (
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {post.title || 'not found'}
                </Text>

                <Text style={styles.body}>
                    {post.body || 'not found'}
                </Text>
            </View>

            <ButtonWithIcon
                title={Strings.save}
                loading={loading}
                icon='md-add'
                onPress={handleSubmit}
            />
        </View>
    );
};

PostPreviewScreen.navigationOptions = {
    title: Strings.postPreviewScreenNavTitle
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10
    },
    content: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5
    },
    title: {
        marginVertical: 5,
        fontFamily: Fonts.bold,
        fontSize: 20
    },
    body: {
        marginVertical: 5,
        fontFamily: Fonts.regular,
        fontSize: 16
    }
});

export default PostPreviewScreen;