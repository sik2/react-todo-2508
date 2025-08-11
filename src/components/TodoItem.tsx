type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li>
      {todo.id}
      <input type="checkbox" />
      {todo.text}
      <button>X</button>
    </li>
  );
}

export default TodoItem;
