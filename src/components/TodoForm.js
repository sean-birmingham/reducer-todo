import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [todoText, setTodoText] = useState("");

    const handleChange = event => {
        setTodoText(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(todoText)
        setTodoText("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoText" value={todoText} onChange={handleChange} />
                <button type="submit">Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;