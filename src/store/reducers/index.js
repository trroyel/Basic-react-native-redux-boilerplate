import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import authReducer from './auth';
import postReducer from './posts';
import todoReducer from './todos';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'auth',
        'posts'
    ],
    blacklist: [
        'todos'
    ]
};

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    todos: todoReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;