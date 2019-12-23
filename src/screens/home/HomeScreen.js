import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Hi from Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
export default HomeScreen;