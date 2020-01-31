import React, { useReducer } from "react";
import Todo from "../components/Todo";
import { initialState, todoReducer } from "../reducers"

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            {state.map(todo => {
                return <Todo key={todo.id} {...todo} />
            })}
        </div>
    )
}

export default TodoList;
