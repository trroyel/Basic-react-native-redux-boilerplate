const initialState = {
    incomes: []
};

const incomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Salary':
            return state;
            break;

        default: return state;
    }
};

export default incomeReducer;