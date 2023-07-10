export namespace LocalStorage {
  const PREFIX = '@RocketToDo'

  type SetItemInput<P = unknown> = {
    key: string
    payload: P
  }

  export function setItem<P = unknown>({ key, payload }: SetItemInput<P>) {
    localStorage.setItem(`${PREFIX}:${key}`, JSON.stringify(payload))
  }

  export function getItem<P = unknown>(key: string): P | null {
    const data = localStorage.getItem(`${PREFIX}:${key}`)

    if (!data) {
      return null
    }

    const parsedData = JSON.parse(data) as P

    return parsedData
  }
}
