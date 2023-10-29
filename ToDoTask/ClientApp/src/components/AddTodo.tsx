import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todosActions';

function AddTodo() {
    const [newTodo, setNewTodo] = useState('');
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) {
            setError("Failed to get newTodo");
            return;
        }
        if (newTodo.trim()) {
            console.log(newTodo)
            dispatch(addTodo({ description: newTodo }));
            setNewTodo('');
        }
        setError(null);
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                    onBlur={() => {
                        if (!newTodo.trim()) {
                            setError("Description cannot be empty");
                        }
                    }}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
