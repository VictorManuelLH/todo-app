
import type { Task } from '../typea/task';

const KEY = 'todo-app';

export function loadTasks(): Task[] {
  try {

    const raw = localStorage.getItem(KEY);
    if (raw) {
      console.log( JSON.parse(raw) as Task[] );
      return JSON.parse(raw) as Task[];
    }
    return [];

  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  } catch {
    return;
  }
}