import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const LoadingIndicator = props => (
    <View style={styles.container}>
        <ActivityIndicator
            size="large"
            color={Colors.primary}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingIndicator;