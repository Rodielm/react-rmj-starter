import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="task"
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
        />
        <label htmlFor="task" className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </label>
      </div>
      <Button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 bg-red-500"
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
