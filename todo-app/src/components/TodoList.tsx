import { useState, type SetStateAction } from "react";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

const TodoList = ({ todos }: { todos: TodoItem[] }) => {
    const [title, setTitle] = useState('');

      const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value);
  };
   
  return (
    <div className="w-96 mx-auto mt-6 space-y-2">
      {todos.map((todo) => (
        <div key={todo.id} 
        className="flex items-center gap-3 p-3 border border-gray-600 rounded">
          <input type="checkbox" checked={todo.completed} 
           onChange={handleChange}
           value={todo.title}
           />
          {/* <span className="text-white">{todo.title}</span> */}
        </div>
      ))}
    </div>
  );
}

export default TodoList;