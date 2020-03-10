import { combineReducers } from 'redux';

import authReducer from './auth';
import postReducer from './posts';
import todoReducer from './todos';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    todos: todoReducer
});

export default rootReducer;