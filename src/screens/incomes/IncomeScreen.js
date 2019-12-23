import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IncomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Hi  from IncomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
export default IncomeScreen;