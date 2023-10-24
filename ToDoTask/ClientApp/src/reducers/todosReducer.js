import { SET_TODOS } from '../actions/todosActions';

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        default:
            return state;
    }
};

export default todosReducer;
