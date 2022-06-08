import { GithubLogo } from 'phosphor-react';

import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.container}>
      <a
        href="https://github.com/MattZ6/rocket-todo"
        target="_blank"
        rel="noreferrer nofoloow noopener"
        title="Go to project repository on Github"
      >
        <GithubLogo size={20} />
      </a>

      <span>Made by <a href="https://github.com/MattZ6" target="_blank" rel="noreferrer nofoloow noopener" title="Go to Mat's Github page">Matheus</a></span>
    </footer>
  );
}
