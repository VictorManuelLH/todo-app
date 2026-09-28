import { Check, Trash2 } from 'lucide-react';
import type { Task } from '../../types/task';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import s from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`${s.item} ${task.completed ? s.completed : ''}`}>
      <input type="checkbox" className={s.checkbox} checked={task.completed} onChange={() => onToggle(task.id)} aria-label={`Marcar "${task.title}"`}/>
      <div className={s.content}>
        <span className={s.title}>{task.title}</span>
        <StatusBadge completed={task.completed} />
      </div>
      <div className={s.actions}>
        <button type="button" className={`${s.action} ${s.toggle}`} onClick={() => onToggle(task.id)} aria-label={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}>
          <Check size={16} />
        </button>
        <button type="button" className={`${s.action} ${s.delete}`} onClick={() => onDelete(task.id)} aria-label="Eliminar tarea">
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  );
}