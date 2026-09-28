import { Check } from 'lucide-react';
import s from './Header.module.css';

export function Header() {
  return (
    <header className={s.header}>
      <span className={s.icon}>
        <Check size={18} strokeWidth={3} />
      </span>
      <h1 className={s.title}>Mi Lista de Tareas</h1>
    </header>
  );
}