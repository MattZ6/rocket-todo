import { Footer, Form, Header, Tasks } from '../../components'
import styles from './styles.module.css'

export function HomePage() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <Form />

        <Tasks />
      </main>

      <Footer />
    </div>
  )
}
