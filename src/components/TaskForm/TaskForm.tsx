import { useState, type FormEvent } from 'react';
import s from './TaskForm.module.css';

interface TaskFormProps {
  onAdd: (title: string) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Nueva tarea..."
        aria-label="Nueva tarea"
      />
      <button type="submit" className={s.button} disabled={!title.trim()}>
        Agregar
      </button>
    </form>
  );
}