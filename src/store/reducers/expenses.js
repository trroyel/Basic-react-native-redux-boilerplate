import * as actions from '../actions/index';

const initialState = {
    expenses: []
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_EXPENSES: {
            return { ...state, expenses: action.expenses };
        };

        default: return state;
    }
};

export default expenseReducer;