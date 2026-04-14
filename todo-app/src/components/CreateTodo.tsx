import { useState } from 'react';
import type { TodoItem } from './types';

const CreateTodo = ({ onAddTodo }: { onAddTodo: (todo: TodoItem) => void }) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (!title.trim()) return;
    
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    
    onAddTodo(newTodo);
    setTitle('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTodo();
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="relative w-96">
        <input 
          type="text"
          placeholder="Add todo..." 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 pr-12 border border-gray-700 shadow-xl rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500" 
        />
        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;