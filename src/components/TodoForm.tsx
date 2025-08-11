import { useState } from "react";

interface TodoFormProps {
  onInsert: (text: string) => void;
}

function TodoForm({ onInsert }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(text);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" onChange={handleOnChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
