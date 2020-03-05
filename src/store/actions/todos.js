import * as actions from './index';
import { showError } from '../../helpers';
import { baseUrl } from '../../constants/Config';

const todosUrl = `${baseUrl}/todos`;

export const fetchTodos = () => {
    return async dispatch => {
        try {
            const response = await fetch(todosUrl);
            const todos = await response.json();

            dispatch({
                type: actions.FETCH_TODOS,
                todos: Array.isArray(todos) ? todos : []
            });
        } catch (error) {
            showError(error.message);
        }
    };
};

export const addTodo = payload => {
    return async dispatch => {
        try {
            const response = await fetch(todosUrl, {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const todo = await response.json();

            dispatch({
                type: actions.ADD_TODO,
                todo: todo
            });
        } catch (error) {
            showError(error.message);
        }
    };
};

export const updatetodo = (id, payload) => {
    return async dispatch => {
        try {
            const response = await fetch(`${todosUrl}/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ ...payload })
            });
            const updatedtodo = response.json();
            dispatch({
                type: actions.UPDATE_TODO,
                todo: updatedtodo
            });
        } catch (error) {
            showError(error.message);
        }
    };
};

export const deleteTodo = id => {
    return async dispatch => {
        try {
            const response = await fetch(`${todosUrl}/${id}`, {
                method: 'DELETE',
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const resData = await response.json();
            dispatch({
                type: actions.DELETE_TODO,
                id: id
            });
        } catch (error) {
            showError(error.message);
        }
    };
};