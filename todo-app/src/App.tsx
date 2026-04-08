import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './App.css'

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1 className='text-center text-gray-200 text-9xl py-5'>todos</h1>
      <CreateTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  )
}

export default App;
