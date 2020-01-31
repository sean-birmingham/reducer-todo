import React, { useReducer } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';
import { initialState, todoReducer } from "./reducers"
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = todoText => {
    dispatch({ type: "ADD_TODO", payload: todoText })
  }

  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm state={state} addTodo={addTodo} />
      <TodoList state={state} />
    </div>
  );
}

export default App;
