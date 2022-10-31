import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react'

import { useTasks } from '../../hooks'
import styles from './styles.module.css'

const PLACEHOLDER_OPTIONS = [
  '🎸 Listen to "Rock of Ages" by Def Leppard',
  'Make a cup of coffee... ☕',
  'I should put some useful placeholder here...',
  'Create a site with Vite... ⚡',
  'Buy a bike... 🚲',
  'Sending Mayk a hug...',
  'Create a to-do list app...',
  'Buy carrots... 🥕',
  'Star this project on GitHub... ⭐',
  'Make more coffee... ☕',
  'Go fishing... 🎣',
  'Listen to Brad Paisley on Spotify 🎼',
  'Help other devs on Discord... 👩‍💻',
  'Check that the coffee jug is empty...',
  'Going out for a run... 🏃‍♀️',
  'Watch Bojack Horseman on Netflix... 📺',
  'Host the project on Netlify...',
]

export function Form() {
  const { addTask } = useTasks()

  const [content, setContent] = useState('')
  const [inputPlaceholder, setInputPlaceholder] = useState(
    () =>
      PLACEHOLDER_OPTIONS[
        Math.floor(Math.random() * PLACEHOLDER_OPTIONS.length)
      ],
  )

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      addTask({ content })

      setInputPlaceholder(
        PLACEHOLDER_OPTIONS[
          Math.floor(Math.random() * PLACEHOLDER_OPTIONS.length)
        ],
      )

      setContent('')
    },
    [content, addTask],
  )

  const handleTextChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setContent(event.target.value)
    },
    [],
  )

  const isInputFilled = useMemo(() => !!content.trim().length, [content])

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        placeholder={inputPlaceholder}
        value={content}
        onChange={handleTextChanged}
      />
      <button type="submit" disabled={!isInputFilled}>
        <span>Add</span>
        <PlusCircle size={24} weight="bold" />
      </button>
    </form>
  )
}
