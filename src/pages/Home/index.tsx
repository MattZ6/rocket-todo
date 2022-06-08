import { Form, Header, Tasks } from '../../components';

import styles from './styles.module.css';

export function HomePage() {
  return (
    <>
      <Header />

      <main className={styles.mainContent}>
        <Form />

        <Tasks />
      </main>
    </>
  )
};
