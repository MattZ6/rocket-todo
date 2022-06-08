import { Notepad } from 'phosphor-react';

import { useTasks } from '../../../../hooks';
import { ScreenState } from '../../../ScreenState';

import { TasksListItem } from '../Item';

import styles from './styles.module.css';

export function TasksList() {
  const { tasks } = useTasks();

  if (!tasks.length) {
    return (
      <ScreenState
        icon={<Notepad size={80} weight="thin" />}
        title="You still have no tasks"
        description="Create tasks and organize your to-do items"
      />
    );
  }

  return (
    <ul className={styles.container}>
      { tasks.map(task => <TasksListItem key={task.id} task={task} />) }
    </ul>
  );
}
