import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

type Props = {
  onSubmit: (content: string) => void;
}

const PLACEHOLDER_OPTIONS = [
  'Make a cup of coffe... ☕',
  'I should put some placeholder here, right?',
  'Create a site with Vite... ⚡',
  'Buy a bike... 🚲',
  'Invite Mayk Brito to a chat...',
  'Create a chat app...',
  'Buy carrots... 🥕',
  '🤩 Star this project on GitHub',
  'Make mooore cofee ☕☕',
  'Go fishing 🎣',
  'Listen to Brad Paisley on Spotify 🎼',
  'Help other devs on Discord... 👩‍💻',
  'Check that the coffee jug is empty...',
  'Going out for a run... 🏃‍♀️',
  'Watch Bojack Horseman on Netflix 📺'
];

export function Form({ onSubmit }: Props) {
  const [content, setContent] = useState('');
  const [inputPlaceholder, setInputPlaceholder] = useState(() => PLACEHOLDER_OPTIONS[Math.floor(Math.random() * PLACEHOLDER_OPTIONS.length)])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(content);

    setInputPlaceholder(PLACEHOLDER_OPTIONS[Math.floor(Math.random() * PLACEHOLDER_OPTIONS.length)])

    setContent('');
  }, [content]);

  const handleTextChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  }, []);

  const isInputFilled = useMemo(() => !!content.trim().length, [content]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        placeholder={inputPlaceholder}
        value={content}
        onChange={handleTextChanged}
      />
      <button type="submit" disabled={!isInputFilled}>
        Add
        <PlusCircle size={24} weight="bold" />
      </button>
    </form>
  );
}
