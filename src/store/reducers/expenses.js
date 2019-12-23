const initialState = {
    incomes: []
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Salary':
            return state;

        default: return state;
    }
};

export default expenseReducer;