import { Check, Trash } from 'phosphor-react'

import { Task } from '../../../../contexts/Tasks'
import { useTasks } from '../../../../hooks'
import styles from './styles.module.css'

type Props = {
  task: Task
}

export function TasksListItem({ task }: Props) {
  const { toggleTask, deleteTask } = useTasks()

  return (
    <li
      className={`${styles.container} ${
        task.completed_at ? styles.checked : ''
      }`}
    >
      <button
        title={task.completed_at ? 'Uncheck task' : 'Check task'}
        onClick={() => toggleTask(task.id)}
        className={styles.checkButton}
      >
        <div>
          <Check weight="bold" />
        </div>
      </button>

      <p>{task.content}</p>

      <button
        title="Delete task"
        type="button"
        className={styles.removeButton}
        onClick={() => deleteTask(task.id)}
      >
        <Trash size={20} />
      </button>
    </li>
  )
}
