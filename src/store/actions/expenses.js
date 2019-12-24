import * as actions from './index';
const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchExpenses = () => {
    return async dispatch => {
        try {
            const response = await fetch(baseUrl);
            const expenses = await response.json();

            dispatch({
                type: actions.FETCH_EXPENSES,
                expenses: expenses
            })
        } catch (error) {
            console.log(error);
        }
    };
};

export const addExpense = payload => {
    return async dispatch => {
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const expense = await response.json();
            console.log('New Expense: ', expense);
            dispatch({
                type: actions.ADD_EXPENSE,
                expense: expense
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    };
};

export const updateExpense = (id, payload)=>{
    return async dispatch=>{
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const updatedExpense = response.json();
            dispatch({
                type: actions.UPDATE_EXPENSE,
                expense: updatedExpense
            })
        } catch (error) {
            console.log('Error: ', error);
        }
    };
};

export const deleteExpense = id => {
    return async dispatch => {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE',
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const resData = await response.json();
            console.log('Data: ',resData);
            dispatch({
                type: actions.DELETE_EXPENSE,
                id: id
            });
        } catch (error) {
            console.log('Error: ', error)
        }
    };
};