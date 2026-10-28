import { useState } from 'react';

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function addItem() {
    setItems([...items, { id: Date.now(), text }]);
    setText('');
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>{items.map((i) => <li key={i.id}>{i.text}</li>)}</ul>
    </div>
  );
}
