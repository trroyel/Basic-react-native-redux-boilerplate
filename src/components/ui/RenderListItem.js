import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors, Fonts } from '../../constants/';

const RenderListItem = ({ item, onDelete, loading }) => (
    <View style={styles.container}>
        <Text style={styles.left}>{item.id}</Text>

        <Text style={styles.middle}
            numberOfLines={1}
            ellipsizeMode='tail'>
            {item.title}
        </Text>

        <TouchableOpacity
            disabled={loading}
            style={styles.right}
            onPress={() => onDelete(item.id)}>

            <Text style={styles.rightText}>x</Text>

        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    left: {
        width: "10%",
        fontSize: 18,
        marginLeft: 5
    },
    middle: {
        width: "80%",
        paddingLeft: 5,
        fontSize: 18
    },
    right: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightText: {
        fontFamily: Fonts.bold,
        fontSize: 25,
        color: Colors.primary
    }
});

export default RenderListItem;