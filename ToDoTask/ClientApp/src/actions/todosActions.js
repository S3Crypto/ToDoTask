// Action types
export const SET_TODOS = 'SET_TODOS';

// Action creators
export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
});

export const getTodos = () => {
    return async dispatch => {
        // Fetch data from the backend API (change the endpoint if necessary)
        const response = await fetch('/Todos');
        const data = await response.json();
        dispatch(setTodos(data));
    };
};
