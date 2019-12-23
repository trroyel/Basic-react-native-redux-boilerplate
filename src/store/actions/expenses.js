import * as actions from './index';
const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchExpenses = () => {
    return async dispatch => {
        try {
            const response = await fetch(baseUrl);
            const expenses = await response.json();
            console.log('Fetching Expenses: ', expenses.length)

            dispatch({
                type: actions.FETCH_EXPENSES,
                expenses: expenses
            })
        } catch (error) {
            console.log(error);
        }
    };
};