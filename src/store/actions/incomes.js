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