import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // The `change` event provides a `matches` property.
    const onChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mql.addEventListener("change", onChange)
    setIsMobile(mql.matches) // Set initial state from the media query list itself
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
