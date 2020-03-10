import AsyncStorage from '@react-native-community/async-storage';

import * as actions from './index';
import Routes from '../../constants/ApiRoutes';
import { showToast } from '../../helpers/ToastHelper';

// const readTextToFile = () => {
//     return new Promise((resolve, reject) => {
//         try {
//             const result = fs.readFileSync('./data.json', 'utf-8');
//             resolve(JSON.parse(result));
//         } catch (error) {
//             reject('Error Occured!');
//         }
//     });
// };

// const writeTextToFile = (data) => {
//     return new Promise((resolve, reject) => {
//         try {
//             fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8');
//             resolve('Write Successfull');
//         } catch (error) {
//             reject('Error occured!');
//         }
//     });
// };

export const userLogin = payload => {
    return async (dispatch, getState) => {
        try {
            const user = getState().auth.user;
            console.log('User: ', user);
            
            dispatch({
                type: actions.LOGIN_SUCCESS,
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const setProfileData = payload =>{
    return  async dispatch => {
        dispatch({
            type: actions.SET_USER_PROFILE_SUCCESS,
            profile: payload
        });
    }
};

export const userSignup = payload => {
    return async dispatch => {
        try {
            //Check the expiration time from api token
            const expirationTime = new Date(new Date().getTime() + 600000);
            await AsyncStorage.setItem('expirationTime', JSON.stringify(expirationTime));

            dispatch({
                type: actions.SIGNUP_SUCCESS,
                user: payload
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};