import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const ListHeader = ({title}) => (
    <View style={styles.container}>
        <Text style={styles.title} >{title || 'Item Data List'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 1
    },
    title: {
        fontFamily: 'semi-bold',
        fontSize: 20
    }
});

export default ListHeader;