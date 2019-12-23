import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const DefaultNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'semi-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'regular'
    },
    headerTintColor: Platform.OS === 'android' ? Colors.secondary : ''
};

export default DefaultNavOption;