import { useState } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", checked: false },
    { id: 2, text: "운동하기", checked: true },
    { id: 3, text: "야구시청", checked: false },
  ]);

  let lastId = todos.length + 1;

  const onInsert = (text: string) => {
    const newTodos = [...todos, { id: lastId, text, checked: false }];
    setTodos(newTodos);
    lastId++;
  };

  const onDelete = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onToggle = (id: number): void => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    setTodos(newTodos);
  };

  return (
    <>
      <h3>Todo List App</h3>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </>
  );
}

export default App;
