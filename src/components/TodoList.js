import React from "react";
import Todo from "../components/Todo";

const TodoList = ({ state }) => {

    return (
        <div>
            {state.map(todo => {
                return <Todo key={todo.id} {...todo} />
            })}
        </div>
    )
}

export default TodoList;
