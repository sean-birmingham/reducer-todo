import React from "react";
import Todo from "../components/Todo";

const TodoList = ({ state, toggleTodo }) => {

    return (
        <div>
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            })}
        </div>
    )
}

export default TodoList;
