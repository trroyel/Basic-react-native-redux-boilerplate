import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddIncomeScreen = props => {
    
    return (
        <View style={styles.screen}>
            <Text> Hi from add Income Screen </Text>
        </View>
    );
};

AddIncomeScreen.navigationOptions = {
    title: 'Add Income'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default AddIncomeScreen;