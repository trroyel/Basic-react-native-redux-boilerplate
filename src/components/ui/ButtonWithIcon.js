import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { Colors, Fonts } from '../../constants/';

const ButtonWithIcon = ({ title, loading, icon, style, ...rest }) => {

    const iconComponent = loading ?
        <ActivityIndicator
            size="small"
            color={Colors.secondary}
        />
        : <Ionicons
            color={Colors.secondary}
            name={icon}
            size={23}
        />

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={loading}
            {...rest}
        >
            <View style={{ ...styles.container, ...style }}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
                {iconComponent}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        height: 58,
        borderRadius: 8,
        marginTop: 20
    },
    buttonText: {
        fontFamily: Fonts.bold,
        color: Colors.secondary,
        textAlign: 'center',
        fontSize: 18,
        marginRight: 10
    }
});

export default ButtonWithIcon;