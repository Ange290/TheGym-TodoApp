import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './App.css'

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', title: 'Sample Todo', completed: false }
  ]);

  const handleAddTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <>
      <h1 className='text-center text-gray-200 text-9xl py-5'>todos</h1>
      <CreateTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
    </>
  )
}

export default App;
