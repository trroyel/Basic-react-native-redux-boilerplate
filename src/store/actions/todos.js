import * as actions from './index';
import Routes from '../../constants/ApiRoutes';
import { showToast } from '../../helpers/ToastHelper';
import * as ApiCaller from '../../helpers/ApiCaller';

export const fetchTodos = () => {
    return async dispatch => {
        try {
            const response = await ApiCaller.get(Routes.todos);
            if (!response.ok) return Promise.reject(response.status);

            const todos = await response.json();

            dispatch({
                type: actions.FETCH_TODOS,
                todos: Array.isArray(todos) ? todos : []
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const addTodo = payload => {
    return async dispatch => {
        try {
            const response = await ApiCaller.post(Routes.todos, payload);
            if (!response.ok) return Promise.reject(response.status);

            const todo = await response.json();

            dispatch({
                type: actions.ADD_TODO,
                todo: todo
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const updatetodo = (id, payload) => {
    return async dispatch => {
        try {
            const response = await ApiCaller.put(Routes.todos, id, payload);
            if (!response.ok) return Promise.reject(response.status);

            const updatedtodo = response.json();

            dispatch({
                type: actions.UPDATE_TODO,
                todo: updatedtodo
            });
        } catch (error) {
            showToast(error.message);
        }
    };
};

export const deleteTodo = id => {
    return async dispatch => {
        try {
            const response = await ApiCaller.del(Routes.todos, id);
            if (response.ok) {
                dispatch({
                    type: actions.DELETE_TODO,
                    id: id
                });
            } else {
                return Promise.reject(response.status);
            }
        } catch (error) {
            showToast(error.message);
        }
    };
};