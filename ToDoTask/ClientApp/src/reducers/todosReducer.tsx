import { ITodo } from '../components/Todo';
import { SET_TODOS, ADD_TODO, TOGGLE_TODO, ADD_TODO_ERROR } from '../actions/todosActions';

const initialState = {
    todos: [] as ITodo[]
};

type Action = {
    type: string;
    payload: any;
};

const todosReducer = (state = initialState, action: Action) => {
    console.log('State before toggle:', state);
    console.log('Action:', action);
    switch (action.type) {
        case SET_TODOS:
            return action.payload;

        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };


        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo: ITodo) =>
                    todo.id === action.payload.id
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : todo
                )
            };

        case ADD_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
            };


        default:
            return state;
    }
};

export default todosReducer;
