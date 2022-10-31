export namespace LocalStorage {
  const PREFIX = '@RocketToDo'

  type SetItemInput = {
    key: string
    payload: any
  }

  export function setItem({ key, payload }: SetItemInput) {
    localStorage.setItem(`${PREFIX}:${key}`, JSON.stringify(payload))
  }

  export function getItem<P = any>(key: string): P | null {
    const data = localStorage.getItem(`${PREFIX}:${key}`)

    if (!data) {
      return null
    }

    const parsedData = JSON.parse(data) as P

    return parsedData
  }
}
