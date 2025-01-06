import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoApp3 = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

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
        Todo App (useLocalStorage)
      </h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp3;
