import { useContext } from 'react';
import { TasksContext } from '../contexts/Task';

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
