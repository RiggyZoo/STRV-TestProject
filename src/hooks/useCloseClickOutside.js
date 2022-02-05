import { useEffect, useRef } from 'react'

export const useCloseClickOutside = (isOpen, onClose) => {
  const refClosingComponent = useRef()

  useEffect(() => {
    const handleClick = (e) => {
      if (
        refClosingComponent.current &&
        !refClosingComponent.current.contains(e.target)
      ) {
        if (isOpen) {
          onClose()
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [isOpen, onClose])

  return refClosingComponent
}
