import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import { TaskFilters } from './components/TaskFilters/TaskFilters';
import { useTasks } from './hooks/useTask.ts';

function App() {
  const { visibleTasks, filter, setFilter, query, setQuery, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <main className="app">
      <section className="card">
        <Header />
        <TaskForm onAdd={addTask} />
        <div className="toolbar">
          <TaskFilters value={filter} onChange={setFilter} />
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </section>
    </main>
  );
}

export default App;