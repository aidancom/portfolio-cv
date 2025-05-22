import { useContext } from "react"
import { NavigationContext } from "../context/NavigationContext"

export const useNavigatePage = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("Error: el contexto esta mal")
  }
  return context
}