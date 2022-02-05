import { useState, useEffect } from 'react'

const DEFAULT_OPTIONS = {
  config: {
    attributes: true,
    childList: false,
    subtree: false,
  } as MutationObserverInit,
}

export const useMutationObservable = (
  targetEl: HTMLElement | null,
  cb: MutationCallback,
  options = DEFAULT_OPTIONS,
) => {
  const [observer, setObserver] = useState<MutationObserver>()

  useEffect(() => {
    const obs = new MutationObserver(cb)
    setObserver(obs)
  }, [cb, options, setObserver])

  useEffect(() => {
    if (!observer || !targetEl) return

    const { config } = options
    observer.observe(targetEl, config)

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [observer, targetEl, options])
}
