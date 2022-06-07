import { useCallback } from 'react';

import { Form, Header } from '../../components';

import styles from './styles.module.css';

export function HomePage() {
  const addToDo = useCallback((content: string) => {

  }, []);

  return (
    <>
      <Header />

      <main className={styles.mainContent}>
        <Form onSubmit={addToDo} />


      </main>
    </>
  )
};
