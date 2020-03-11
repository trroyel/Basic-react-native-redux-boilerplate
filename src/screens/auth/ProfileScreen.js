import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { HeaderButton } from '../../components/ui';
import { userLogout } from '../../store/actions/auth';
import { Strings, AppRoutes, Colors, Fonts } from '../../constants/';

const ProfileScreen = props => {

    const dispatch = useDispatch();
    const { isAuthenticated, user, userProfile } = useSelector(state => state.auth);

    useEffect(() => {
        props.navigation.setParams({ isAuthenticated, handleAuthStatus });
    }, [isAuthenticated]);

    const handleAuthStatus = useCallback(() => {
        if (isAuthenticated) {
            handleLogout();
        } else {
            props.navigation.navigate(AppRoutes.Authenticate);
        }
    }, [isAuthenticated, dispatch]);


    const handleLogout = () => {
        Alert.alert(Strings.deleteAlertTitle, Strings.deleteAlertInstruction, [
            { text: Strings.no, style: "default" },
            {
                text: Strings.yes,
                style: "destructive",
                onPress: () => dispatch(userLogout())
            }
        ]);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>User Details</Text>

            <Text style={styles.title}>User</Text>
            <View style={styles.userContainer}>
                <Text style={styles.text}>Email : {user !== null ? user.email : 'not set'}</Text>
                <Text style={styles.text}>Password: {user !== null ? user.password : 'not set'}</Text>
            </View>

            <Text style={styles.title}>Profile</Text>
            <View style={styles.profileContainer}>
                <Text style={styles.text}>Name: {userProfile !== null ? userProfile.name : 'not set'}</Text>
                <Text style={styles.text}>Address: {userProfile !== null ? userProfile.address : 'not set'}</Text>
                <Text style={styles.text}>Age: {userProfile !== null ? userProfile.age : 'not set'}</Text>
                <Text style={styles.text}>Mobile: {userProfile !== null ? userProfile.mobile : 'not set'}</Text>
            </View>
        </View>
    );
};


ProfileScreen.navigationOptions = ({ navigation }) => {
    const isAuthenticated = navigation.getParam('isAuthenticated');
    const handleAuthStatus = navigation.getParam('handleAuthStatus');

    return {
        title: Strings.profileScreenNavTitle,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="md-menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName={isAuthenticated ? "md-power" : "md-key"}
                    onPress={() => handleAuthStatus()}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 15,
        marginHorizontal: 15
    },
    userContainer: {
        height: 100,
        marginBottom: 30,
        padding: 15,
        justifyContent: 'center',
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 8
    },
    profileContainer: {
        height: 150,
        padding: 15,
        justifyContent: 'center',
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 8
    },
    heading: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        marginBottom: 10
    },
    title: {
        fontFamily: Fonts.semiBold,
        fontSize: 18
    },
    text: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        marginVertical: 4
    }
});

export default ProfileScreen;