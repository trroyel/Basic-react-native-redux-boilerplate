import React from 'react';
import { View, StyleSheet, Image, Platform, TouchableOpacity, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import Colors from '../../constants/Colors';

const HeaderButton = ({ onPress, size, icon, color, loading, ...rest }) => {
    let TouchableComponent = TouchableOpacity;
    let renderIcon;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    if (loading) {
        renderIcon = <ActivityIndicator size="small" color={Colors.secondary} />
    } else {
        renderIcon = <Image
            style={{ height: size, width: size, tintColor: color }}
            source={icon}
        />
    }

    return (
        <TouchableComponent useForeground onPress={onPress} {...rest}>
            <View style={{ ...styles.container, height: size, width: size }}>
               {renderIcon}
            </View>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HeaderButton;