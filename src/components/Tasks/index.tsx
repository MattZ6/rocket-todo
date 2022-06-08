import { TasksHeader, TasksList } from './components';

import styles from './styles.module.css';

export function Tasks() {
  return (
    <div className={styles.container}>
      <TasksHeader />

      <TasksList />
    </div>
  );
}
