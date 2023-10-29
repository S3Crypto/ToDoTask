import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../actions/todosActions';
import AddTodo from './AddTodo';
import { ITodo, Todo } from './Todo';

function TodosList() {
    const dispatch = useDispatch();

    interface RootState {
        todos: ITodo[];
    }

    const todos: ITodo[] = useSelector((state: RootState) => state.todos);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <div>
            <h2>Pending Tasks</h2>
            <ul>
                {todos.filter((t: ITodo) => !t.isCompleted).map((todo: ITodo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>

            <h2>Completed Tasks</h2>
            <ul>
                {todos.filter((t: ITodo) => t.isCompleted).map((todo: ITodo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
            <AddTodo />
        </div>
    );
}

export default TodosList;
