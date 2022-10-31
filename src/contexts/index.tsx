import { ReactNode } from 'react'

import { TasksProvider } from './Tasks'

type Props = {
  children: ReactNode
}

export function Provider({ children }: Props) {
  return <TasksProvider>{children}</TasksProvider>
}
