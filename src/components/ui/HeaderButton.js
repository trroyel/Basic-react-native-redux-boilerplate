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
            color={Platform.OS === 'android' ? Colors.secondary : Colors.primary} />
    );
};

export default CustomHeaderButton;


// import React from 'react';
// import { View, StyleSheet, Image, Platform, TouchableOpacity, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
// import Colors from '../../constants/Colors';

// const HeaderButton = ({ onPress, size, icon, color, loading, ...rest }) => {
//     let TouchableComponent = TouchableOpacity;
//     let renderIcon;

//     if (Platform.OS === 'android' && Platform.Version >= 21) {
//         TouchableComponent = TouchableNativeFeedback;
//     }

//     if (loading) {
//         renderIcon = <ActivityIndicator size="small" color={Colors.secondary} />
//     } else {
//         renderIcon = <Image
//             style={{ height: size, width: size, tintColor: color }}
//             source={icon}
//         />
//     }

//     return (
//         <TouchableComponent useForeground onPress={onPress} {...rest}>
//             <View style={{ ...styles.container, height: size, width: size }}>
//                {renderIcon}
//             </View>
//         </TouchableComponent>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginHorizontal: 10,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });

// export default HeaderButton;