import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoApp2 = () => {
  const [todos, setTodos] = useState(() => {
    // initialize
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow rounded">
      <h1 className="text-2xl font-bold text-center">
        Todo App (LocalStorage)
      </h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp2;
