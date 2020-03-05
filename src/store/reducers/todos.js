import * as actions from '../actions';

const initialState = {
    todos: [],
    updated: 0
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_TODOS: {
            return {
                ...state,
                todos: action.todos,
                updated: Date.now()
            };
        };
        case actions.ADD_TODO: {
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        };
        case actions.DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        };
        case actions.UPDATE_TODO: {
            const todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.todo.id);

            if (index !== -1) {
                todos[index] = {
                    ...todos[index],
                    ...action.todo
                };
            }
            return {
                ...state,
                todos: todos
            }
        };
        default: return state;
    }
};

export default todoReducer;