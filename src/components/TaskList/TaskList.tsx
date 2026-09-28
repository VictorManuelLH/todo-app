import type { Task } from '../../types/task';
import { TaskItem } from '../TaskItem/TaskItem';
import s from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) return <p className={s.empty}>No hay tareas. Agrega una arriba.</p>;

  return (
    <ul className={s.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}