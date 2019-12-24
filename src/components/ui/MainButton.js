import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';

const MainButton = ({ title, style, ...rest }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.5}
                {...rest}
            >
                <View style={{...styles.button, ...style}}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        fontFamily: 'open-sans-bold',
        color: Colors.secondary,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default MainButton;