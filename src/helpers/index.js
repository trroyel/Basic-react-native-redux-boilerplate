import { ToastAndroid } from 'react-native';

export const showError = message => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
    );
};