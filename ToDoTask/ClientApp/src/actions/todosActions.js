// Action types
export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";


// Action creators
export const getTodos = () => {
    return async dispatch => {
        const response = await fetch('/Todos');
        const data = await response.json();
        dispatch(setTodos(data));
    };
};

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
});

let nextTodoId = 0;

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: { filter }
});

