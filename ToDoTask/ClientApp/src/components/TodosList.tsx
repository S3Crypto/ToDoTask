import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../actions/todosActions';

function TodosList() {
    const dispatch = useDispatch();

    interface Todo {
        id: number;
        description: string;
        isCompleted: boolean;
    }
    interface RootState {
        todos: Todo[];
    }
    const todos = useSelector((state: RootState) => state.todos); // adjust the state path based on your store structure

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <div>
            <h2>Pending Tasks</h2>
            <ul>
                {todos.filter(t => !t.isCompleted).map(todo => (
                    <li key={todo.id}>{todo.description}</li>
                ))}
            </ul>

            <h2>Completed Tasks</h2>
            <ul>
                {todos.filter(t => t.isCompleted).map(todo => (
                    <li key={todo.id}>{todo.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodosList;
