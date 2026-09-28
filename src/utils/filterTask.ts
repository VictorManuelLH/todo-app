import type { Task, TaskFilter } from '../types/task';

export function filterTasks(tasks: Task[], filter: TaskFilter, query: string): Task[] {
  const q = query.trim().toLowerCase();
  return tasks.filter((t) => {
    const matchesFilter = filter === 'all' || (filter === 'pending' ? !t.completed : t.completed);
    return matchesFilter && t.title.toLowerCase().includes(q);
  });
}