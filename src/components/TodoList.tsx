import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
