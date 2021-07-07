import React from "react";
import Todo from "../components/Todo";

const TodoList = ({ state, toggleTodo, clearCompleted }) => {

    return (
        <div>
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            })}
            <button onClick={clearCompleted}>Clear</button>
        </div>
    )
}

export default TodoList;
