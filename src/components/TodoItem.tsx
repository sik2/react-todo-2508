type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

function TodoItem({
  todo,
  onDelete,
  onToggle,
}: {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  return (
    <li>
      {todo.id}
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.checked}
        readOnly
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
