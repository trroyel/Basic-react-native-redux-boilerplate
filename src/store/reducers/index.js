import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import incomeReducer from './incomes';
import expenseReducer from './expenses';

const rootReducer = combineReducers({
    incomes: incomeReducer,
    expenses: expenseReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

export default store;