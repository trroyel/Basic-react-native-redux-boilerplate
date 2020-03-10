import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { postIcon } from '../../constants/Icons';
import { Colors, Strings, Fonts, AppRoutes } from '../../constants/';
import { InputTextWithIcon, ButtonWithIcon } from '../../components/ui';

const ProfileScreen = props => {
    const [age, setAge] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        props.navigation.navigate(AppRoutes.Profile);
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <InputTextWithIcon
                    autoFocus
                    icon={postIcon}
                    value={address}
                    label={Strings.profileScreenAddressInputLabel}
                    placeholder={Strings.profileScreenAddressInputPlaceholder}
                    onChangeText={setAddress}
                />
                <InputTextWithIcon
                    icon={postIcon}
                    value={age}
                    secureTextEntry
                    label={Strings.profileScreenAgeInputLabel}
                    placeholder={Strings.profileScreenAgeInputPlaceholder}
                    onChangeText={setAge}
                />
                <InputTextWithIcon
                    icon={postIcon}
                    value={mobile}
                    secureTextEntry
                    label={Strings.profileScreenMobileInputLabel}
                    placeholder={Strings.profileScreenMobileInputPlaceholder}
                    onChangeText={setMobile}
                />
                <ButtonWithIcon
                    loading={loading}
                    title={Strings.add}
                    icon="md-add"
                    onPress={handleSubmit}
                />
            </View>
        </ScrollView>
    );
};


ProfileScreen.navigationOptions = {
    title: Strings.profileScreenNavTitle
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default ProfileScreen;