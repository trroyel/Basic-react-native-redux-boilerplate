import * as actions from '../actions/index';

const initialState = {
    isAuthenticated: false,
    user: null,
    userProfile: null,
    nextRoute: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGNUP_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            };
        }

        case actions.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true
            }
        }

        case actions.LOGOUT_SUCCESS: {
            return initialState;
        }

        case actions.SET_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                userProfile: action.profile
            };
        };

        case actions.SET_NEXT_ROUTE_SUCCESS: {
            return {
                ...state,
                nextRoute: action.route
            };
        };

        default: {
            return state;
        }
    }
};

export default authReducer;