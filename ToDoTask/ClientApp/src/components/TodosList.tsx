import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../actions/todosActions';
import AddTodo from './AddTodo';
import { Todo } from './Todo';

function TodosList() {
    const dispatch = useDispatch();

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
            <AddTodo />
        </div>
    );
}

export default TodosList;
