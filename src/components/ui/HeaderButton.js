import React from 'react';
import { Platform } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicon}
            iconSize={26}
            color={Platform.OS === 'android' ? Colors.secondary : Colors.primary} 
        />
    );
};

export default CustomHeaderButton;