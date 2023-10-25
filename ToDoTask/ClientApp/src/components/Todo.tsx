import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todosActions';

export type Todo = {
    id: number;
    description: string;
    isCompleted: boolean;
}

function Todo({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();

    return (
        <li onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.isCompleted ? <s>{todo.description}</s> : todo.description}
        </li>
    );
}
