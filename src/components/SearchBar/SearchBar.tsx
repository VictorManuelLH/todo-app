import { Search } from 'lucide-react';
import s from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Buscar...' }: SearchBarProps) {
  return (
    <div className={s.search}>
      <Search className={s.icon} size={16} aria-hidden="true" />
      <input type="search" className={s.input} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label="Buscar tareas" />
    </div>
  );
}