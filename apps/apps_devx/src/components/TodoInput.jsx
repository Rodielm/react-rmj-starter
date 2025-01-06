import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        className="px-4 py-2 border rounded shadow-sm"
      />
      <Button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
