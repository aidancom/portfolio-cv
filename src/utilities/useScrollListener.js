import { useEffect } from "react"

export const useScrollListener = (setUp) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) setUp(true)
      if (window.scrollY === 0) setUp(false)
    })
  }, [])
}