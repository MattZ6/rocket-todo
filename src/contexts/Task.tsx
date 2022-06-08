import { createContext, ReactNode, useCallback, useState } from 'react';

export type Task = {
  id: string;
  content: string;
  created_at: Date;
  completed_at?: Date;
}

type AddTasksInput = {
  content: string;
}

type ContextData = {
  tasks: Task[];
  addTask: (data: AddTasksInput) => void;
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export const TasksContext = createContext({} as ContextData);

type Props = {
  children: ReactNode;
}

export function TasksProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback(({ content }: AddTasksInput) => {
    setTasks(state => [
      {
        id: String(state.length + 1),
        content,
        created_at: new Date()
      },
      ...state
    ]);
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setTasks(state => state.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed_at: task.completed_at ? undefined : new Date(),
        };
      }

      return task;
    }));
  }, []);

  const deleteTask = useCallback((taskId: string) => {
    setTasks(state => state.filter(task => task.id !== taskId));
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask
      }}
    >
      { children }
    </TasksContext.Provider>
  )
}
