import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todosActions';

export interface ITodo {
        id: number;
        description: string;
        isCompleted: boolean;
}

export const Todo: React.FC<ITodo> = ({ id, description, isCompleted }) => {
    const dispatch = useDispatch();

    return (
        <li onClick={() => dispatch(toggleTodo(id))}>
            {isCompleted ? <s>{description}</s> : description}
        </li>
    );
};



export default Todo;

