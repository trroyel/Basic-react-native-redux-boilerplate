import * as actions from '../actions';

const initialState = {
    incomes: []
};

const incomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_INCOMES:{
            return{
                ...state, 
                incomes: action.incomes
            };
        };

        default: return state;
    }
};

export default incomeReducer;