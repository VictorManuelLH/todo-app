import type { TaskFilter } from '../../types/task';
import s from './TaskFilters.module.css';

interface TaskFiltersProps {
  value: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}

const OPTIONS: { value: TaskFilter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
];

export function TaskFilters({ value, onChange }: TaskFiltersProps) {
  return (
    <div className={s.filters} role="tablist" aria-label="Filtrar tareas">
      {OPTIONS.map((opt) => (
        <button key={opt.value} type="button" role="tab" aria-selected={value === opt.value} className={`${s.tab} ${value === opt.value ? s.active : ''}`} onClick={() => onChange(opt.value)}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}