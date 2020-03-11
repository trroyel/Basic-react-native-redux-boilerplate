import AsyncStorage from '@react-native-community/async-storage';

import * as actions from './index';
import { showToast } from '../../helpers/ToastHelper';

// const readJsonObjectToFile = () => {
//     return new Promise((resolve, reject) => {
//         try {
//             const result = fs.readFileSync('./data.json', 'utf-8');
//             resolve(JSON.parse(result));
//         } catch (error) {
//             reject('Error Occured!');
//         }
//     });
// };

// const writeJsonObjectToFile = (data) => {
//     return new Promise((resolve, reject) => {
//         try {
//             fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8');
//             resolve('Write Successfull');
//         } catch (error) {
//             reject('Error occured!');
//         }
//     });
// };

//Fake promise to make asynchrounous
const customPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Timer is out');
        }, 2000);
    });
};

export const setNextRoute = route => {
    return {
        type: actions.SET_NEXT_ROUTE_SUCCESS,
        route: route
    };
};

export const userLogout = () => {
    return {
        type: actions.LOGOUT_SUCCESS
    };
};

export const userLogin = payload => {
    return async (dispatch, getState) => {
        try {
            const user = getState().auth.user;

            dispatch({
                type: actions.LOGIN_SUCCESS,
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const setProfileData = payload => {
    return async dispatch => {
        await customPromise();

        dispatch({
            type: actions.SET_USER_PROFILE_SUCCESS,
            profile: payload
        });
    }
};

export const userSignup = payload => {
    return async dispatch => {
        try {
            //Fetch custom fake promise
            await customPromise();

            //Check the expiration time from api token
            const expirationTime = new Date(new Date().getTime() + 600000);
            await AsyncStorage.setItem('expirationTime', JSON.stringify(expirationTime));

            //inject the demo userId with email & password
            payload.userId = 1;

            dispatch({
                type: actions.SIGNUP_SUCCESS,
                user: payload
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};