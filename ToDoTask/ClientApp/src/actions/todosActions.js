

// Action types
export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

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

export const addTodo = (content) => {
    return async dispatch => {
        try {
            const response = await fetch('/todos', {
                method: 'POST',
                body: JSON.stringify(content),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            dispatch({
                type: ADD_TODO,
                payload: data
            });
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);

            dispatch({
                type: ADD_TODO_ERROR,
                payload: error.message
            });
        }
    }
};

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});
