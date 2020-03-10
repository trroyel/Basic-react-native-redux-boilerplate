import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {Colors, Fonts} from '../../constants/';

const MainButton = ({ title, style, ...rest }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            {...rest}
        >
            <View style={{ ...styles.container, ...style }}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        fontFamily: Fonts.bold,
        color: Colors.secondary,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default MainButton;