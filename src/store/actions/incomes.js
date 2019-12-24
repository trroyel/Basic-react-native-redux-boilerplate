import * as actions from './index';
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const fetchIncomes = () => {
    return async dispatch => {
        try {
            const response = await fetch(baseUrl);
            const incomes = await response.json();
            console.log('Fetching Incomes: ', incomes.length);
            dispatch({
                type: actions.FETCH_INCOMES,
                incomes: incomes
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export const addIncome = (payload) => {
    return async dispatch => {
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const income = await response.json();
            console.log('New Imcome: ', income);
            dispatch({
                type: actions.ADD_INCOME,
                income: income
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    };
};

export const deleteIncome = id => {
    return async dispatch => {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE',
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const resData = await response.json();
            console.log('Data: ',resData);
            dispatch({
                type: actions.DELETE_INCOME,
                id: id
            });
        } catch (error) {
            console.log('Error: ', error)
        }
    };
};