import s from './StatusBadge.module.css';

interface StatusBadgeProps {
  completed: boolean;
}

export function StatusBadge({ completed }: StatusBadgeProps) {
  return (
    <span className={`${s.badge} ${completed ? s.completed : s.pending}`}>
      {completed ? 'Completada' : 'Pendiente'}
    </span>
  );
}