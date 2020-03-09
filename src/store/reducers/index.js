import { combineReducers } from 'redux';

import postReducer from './posts';
import todoReducer from './todos';

const rootReducer = combineReducers({
    posts: postReducer,
    todos: todoReducer
});

export default rootReducer;