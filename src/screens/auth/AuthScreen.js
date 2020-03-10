import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { postIcon } from '../../constants/Icons';
import { Strings, AppRoutes } from '../../constants/';
import { userLogin, userSignup } from '../../store/actions/auth';
import { InputTextWithIcon, ButtonWithIcon, HeaderButton } from '../../components/ui';

const LoginScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        setLoading(true);
        await dispatch(userSignup({ email, password }));
        setLoading(false);
        props.navigation.navigate(AppRoutes.Profile);
    }

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


LoginScreen.navigationOptions = ({ navigation }) => {
    return {
        title: Strings.authScreenNavTitle,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="md-menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default LoginScreen;