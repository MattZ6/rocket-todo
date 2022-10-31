import { useMemo } from 'react'

import { useTasks } from '../../../../hooks'
import styles from './styles.module.css'

export function TasksHeader() {
  const { tasks } = useTasks()

  const completeTasksCount = useMemo(() => {
    return tasks.reduce((previous, current) => {
      if (current.completed_at) {
        return previous + 1
      }

      return previous
    }, 0)
  }, [tasks])

  return (
    <header className={styles.container}>
      <div>
        <strong className={styles.countLabel}>Tasks</strong>
        <small>{tasks.length}</small>
      </div>

      <div>
        <strong className={styles.doneLabel}>Done</strong>
        <small>
          {completeTasksCount} of {tasks.length}
        </small>
      </div>
    </header>
  )
}
