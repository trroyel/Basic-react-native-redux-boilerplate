import * as actions from '../actions/';

const initialState = {
    expenses: [],
    updated: 0
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_EXPENSES: {
            return {
                ...state,
                expenses: action.expenses,
                updated: Date.now()
            };
        };
        case actions.ADD_EXPENSE: {
            return {
                ...state,
                expenses: state.expenses.concat(action.expense)
            };
        };
        case actions.DELETE_EXPENSE: {
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.id)
            };
        };
        case actions.UPDATE_EXPENSE: {
            const expenses = [...state.expenses];
            const index = expenses.findIndex(expense => expense.id === action.expense.id);

            if (index !== -1) {
                expenses[index] = {
                    ...expenses[index],
                    ...action.expense
                };
            }
            return {
                ...state,
                expenses: expenses
            }
        };
        default: return state;
    }
};

export default expenseReducer;