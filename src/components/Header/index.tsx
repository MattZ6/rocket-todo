import logoImg from '../../assets/logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <img src={logoImg} alt="Rocket ToDo logo" />
        <strong>to<span>do</span></strong>
      </div>
    </header>
  );
}
