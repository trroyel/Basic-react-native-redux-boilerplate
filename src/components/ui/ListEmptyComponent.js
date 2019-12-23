import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListEmptyComponent = ({ message }) => (
    <View style={styles.container}>
        <Text> {message || 'No item is found!'} </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListEmptyComponent;