import { useCallback, useEffect, useState } from "react"
import type { Status } from "../types"

const DELAY_MS = 400

type State<T> = { status: Status; data?: T }

export function useSampleData<T>(sample: T, fail = false) {
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<State<T>>({ status: "loading" })

  useEffect(() => {
    setState({ status: "loading" })
    const timer = setTimeout(() => {
      setState(fail ? { status: "error" } : { status: "ready", data: sample })
    }, DELAY_MS)
    return () => clearTimeout(timer)
  }, [attempt, fail, sample])

  const update = useCallback((updater: (current: T) => T) => {
    setState((current) =>
      current.status === "ready" && current.data !== undefined
        ? { status: "ready", data: updater(current.data) }
        : current,
    )
  }, [])

  const retry = useCallback(() => setAttempt((count) => count + 1), [])

  return { data: state.data, status: state.status, update, retry }
}
