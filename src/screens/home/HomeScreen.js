import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButton } from '../../components/ui';
import Colors from '../../constants/Colors';
import { menu } from '../../constants/Icons';

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
            <HeaderButton
                icon={menu}
                size={24}
                color={Colors.secondary}
                onPress={() => navigation.toggleDrawer()}
            />
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