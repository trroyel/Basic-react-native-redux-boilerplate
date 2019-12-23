import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RenderListItem = ({ item }) => (
    <View style={styles.container}>
        <Text style={styles.left}>{item.id}</Text>
        <Text style={styles.right}>{item.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    left: {
        width: '10%',
        fontSize: 18,
        marginLeft: 5
    },
    right: {
        width: '90%',
        paddingLeft: 5,
        fontSize: 18
    }
});

export default RenderListItem;