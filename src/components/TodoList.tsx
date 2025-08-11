import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
