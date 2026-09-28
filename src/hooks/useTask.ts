import { useEffect, useMemo, useState } from 'react';
import type { Task, TaskFilter } from '../types/task';
import { loadTasks, saveTasks } from '../services/taskStorage';
import { filterTasks } from '../utils/filterTask';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const [filter, setFilter] = useState<TaskFilter>('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const visibleTasks = useMemo(() => filterTasks(tasks, filter, query), [tasks, filter, query]);

  const addTask = (title: string) => {
    const clean = title.trim();
    if (!clean) return;
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), title: clean, completed: false, createdAt: Date.now() }]);
  };

  const toggleTask = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id: string) => setTasks((prev) => prev.filter((t) => t.id !== id));

  return { visibleTasks, filter, setFilter, query, setQuery, addTask, toggleTask, deleteTask };
}