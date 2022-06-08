import styles from './styles.module.css';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function ScreenState({ icon, title, description }: Props) {
  return (
    <div className={styles.container}>
      { icon }
      <strong>{ title }</strong>
      <p>{ description }</p>
    </div>
  );
}
