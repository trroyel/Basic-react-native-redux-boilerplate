import React from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';

import { Colors, Fonts } from '../../constants/';

const InputTextwithIcon = ({ icon, error, label, ...rest }) => {
    const color = error ? Colors.danger : Colors.primary;

    return (
        <View style={styles.container}>
            {label ? <Text style={styles.label}>{label}</Text> : null}

            <View style={{ ...styles.formControl, borderColor: color }}>
                <View style={styles.iconContainer}>
                    <Image
                        source={icon}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        {...rest}
                    />
                </View>
            </View>
            <Text style={styles.error}>{error} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 2,
    },
    formControl: {
        flexDirection: 'row',
        paddingVertical: 2,
        justifyContent: 'center',
        borderWidth: 1.2,
        borderColor: Colors.primary,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },
    label: {
        fontSize: 16,
        paddingBottom: 5,
        paddingLeft: 2,
        color: Colors.accent
    },
    inputContainer: {
        flex: 6
    },
    input: {
        fontFamily: Fonts.regular,
        fontSize: 18,
        paddingRight: 5,
        backgroundColor: 'transparent'
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 24,
        width: 24,
    },
    error: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: Colors.danger,
        paddingLeft: 2
    }
});

export default InputTextwithIcon;