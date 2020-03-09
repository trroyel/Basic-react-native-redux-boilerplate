import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

export default store;