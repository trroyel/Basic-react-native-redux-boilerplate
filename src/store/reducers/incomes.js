import * as actions from '../actions';

const initialState = {
    incomes: [],
    updated: 0
};

const incomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_INCOMES: {
            return {
                ...state,
                incomes: action.incomes,
                updated: Date.now()
            };
        };
        case actions.ADD_INCOME: {
            return {
                ...state,
                incomes: state.incomes.concat(action.income)
            };
        };
        case actions.DELETE_INCOME: {
            return {
                ...state,
                incomes: state.incomes.filter(income => income.id !== action.id)
            };
        };
        case actions.UPDATE_INCOME: {
            const incomes = [...state.incomes];
            const index = incomes.findIndex(income => income.id === action.income.id);

            if (index !== -1) {
                incomes[index] = {
                    ...incomes[index],
                    ...action.income
                };
            }
            return {
                ...state,
                incomes: incomes
            }
        };

        default: return state;
    }
};

export default incomeReducer;