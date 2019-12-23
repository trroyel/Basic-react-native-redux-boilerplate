import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddExpenseScreen = props => {
     return (
     <View style={ styles.screen}>
        <Text> Hi from add Expense Screen </Text>
     </View>
    );
};

AddExpenseScreen.navigationOptions = {
    title: 'Add Expense'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default AddExpenseScreen;