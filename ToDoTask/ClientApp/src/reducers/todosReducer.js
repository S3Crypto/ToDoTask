import { SET_TODOS, ADD_TODO, TOGGLE_TODO } from '../actions/todosActions';

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;

        case ADD_TODO:
            return [...state, action.payload];

        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};

export default todosReducer;
