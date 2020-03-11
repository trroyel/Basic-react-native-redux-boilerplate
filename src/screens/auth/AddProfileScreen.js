import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, ScrollView } from 'react-native';

import { postIcon } from '../../constants/Icons';
import {  Strings, AppRoutes } from '../../constants';
import {setProfileData} from '../../store/actions/auth';
import { InputTextWithIcon, ButtonWithIcon } from '../../components/ui';

const ProfileScreen = props => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const {isAuthenticated, nextRoute} = useSelector(state=>state.auth);

    useEffect(()=>{
        if(!isAuthenticated){
            props.navigation.navigate(AppRoutes.Authenticate);
        }
    },[isAuthenticated]);


    const handleSubmit = async () => {
        setLoading(true);
        await dispatch(setProfileData({
            age: age, 
            mobile: mobile, 
            address: address,
            name: name
        }));
        setLoading(false);
        
        if(nextRoute === null){
            props.navigation.popToTop();
        }else{
            props.navigation.replace(nextRoute);
        }
    };


    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.screen}>
                <InputTextWithIcon
                    autoFocus
                    icon={postIcon}
                    value={name}
                    label={Strings.profileScreenNameInputLabel}
                    placeholder={Strings.profileScreenNameInputPlaceholder}
                    onChangeText={setName}
                />
                <InputTextWithIcon
                    icon={postIcon}
                    value={address}
                    label={Strings.profileScreenAddressInputLabel}
                    placeholder={Strings.profileScreenAddressInputPlaceholder}
                    onChangeText={setAddress}
                />
                <InputTextWithIcon
                    icon={postIcon}
                    value={age}
                    keyboardType="number-pad"
                    label={Strings.profileScreenAgeInputLabel}
                    placeholder={Strings.profileScreenAgeInputPlaceholder}
                    onChangeText={setAge}
                />
                <InputTextWithIcon
                    icon={postIcon}
                    value={mobile}
                    keyboardType="number-pad"
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