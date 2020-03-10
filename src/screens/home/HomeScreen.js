import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { HeaderButton } from '../../components/ui';

const HomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Hi from Home Screen</Text>
        </View>
    );
};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Home",
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default HomeScreen;