import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { postIcon } from '../../constants/Icons';
import { Strings, AppRoutes } from '../../constants/';
import { userSignup } from '../../store/actions/auth';
import { InputTextWithIcon, ButtonWithIcon, HeaderButton } from '../../components/ui';

const LoginScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { userProfile, nextRoute } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        setLoading(true);
        await dispatch(userSignup({ email, password }));
        setLoading(false);

        if (userProfile === null && nextRoute !== null) {
            props.navigation.replace(AppRoutes.PostAddProfile);
        } else {
            props.navigation.replace(AppRoutes.ProfileHome);
        }
    };

    return (
        <View style={styles.screen}>
            <InputTextWithIcon
                autoFocus
                icon={postIcon}
                value={email}
                label={Strings.authScreenEmailInputLabel}
                placeholder={Strings.authScreenEmailInputPlaceholder}
                onChangeText={setEmail}
            />
            <InputTextWithIcon
                icon={postIcon}
                value={password}
                secureTextEntry
                label={Strings.authScreenPasswordInputLabel}
                placeholder={Strings.authScreenPasswordInputPlaceholder}
                onChangeText={setPassword}
            />

            <ButtonWithIcon
                loading={loading}
                title={Strings.login}
                icon="md-add"
                onPress={handleSubmit}
            />
        </View>
    );
};


LoginScreen.navigationOptions = {
    title: Strings.authScreenNavTitle,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default LoginScreen;