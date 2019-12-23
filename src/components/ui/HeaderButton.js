import React from 'react';
import { View, StyleSheet, Image, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const HeaderButton = ({ onPress, size, icon, color }) => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 22) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <TouchableComponent
            hitSlop={styles.hitSlop}
            onPress={onPress}
        >
            <View style={{ ...styles.container, height: size, width: size }}>
                <Image
                    style={{ height: size, width: size, tintColor: color }}
                    source={icon}
                />
            </View>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hitSlop: {
        top: 20, 
        bottom: 20,
         left: 20,
          right: 20
    }
});

export default HeaderButton;