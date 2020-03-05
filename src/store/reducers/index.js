import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import postReducer from './posts';
import todoReducer from './todos';

const rootReducer = combineReducers({
    posts: postReducer,
    todos: todoReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

export default store;