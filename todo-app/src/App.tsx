import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import type { TodoItem } from './components/types';
import './App.css'



function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    
  ]);

  const handleAddTodo = (newTodo: TodoItem) => {
    setTodos(prev => [...prev, newTodo]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };


  return (
    <>
      <h1 className='text-center text-gray-200 text-9xl py-5'>todos</h1>
      <CreateTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo}  />
    </>
  )
}

export default App;
