import TodoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    { id: 1, text: "리액트 공부하기", checked: false },
    { id: 2, text: "운동하기", checked: true },
    { id: 3, text: "야구시청", checked: false },
  ];

  return (
    <>
      <h3>Todo List App</h3>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
