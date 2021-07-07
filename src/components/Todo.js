import React from "react";

const Todo = ({ todo, toggleTodo }) => {
    return (
        <div className={`todo${todo.completed ? " completed" : ""}`} onClick={() => toggleTodo(todo.id)}>
            <p>{todo.item}</p>
        </div>
    )
}

export default Todo;