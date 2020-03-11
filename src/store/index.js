import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import persistedReducer from './reducers';

const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const persistor = persistStore(store);

export { store, persistor };