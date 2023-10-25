// Action types
export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

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

export const addTodo = (todo) => (dispatch) => {
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
        .then((response) => response.json())
        .then((newTodo) => {
            dispatch({
                type: ADD_TODO,
                payload: newTodo
            });
        });
};

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});
