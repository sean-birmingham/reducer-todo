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

  const toggleTodo = todoId => {
    dispatch({ type: "TOGGLE_TODO", id: todoId })
  }

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm state={state} addTodo={addTodo} />
      <TodoList state={state} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
