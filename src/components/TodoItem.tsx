type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

function TodoItem({ todo, onDelete }: { todo: Todo }) {
  return (
    <li>
      {todo.id}
      <input type="checkbox" />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
