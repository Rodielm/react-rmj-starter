import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow rounded">
      <h1 className="text-2xl font-bold text-center">Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp;
