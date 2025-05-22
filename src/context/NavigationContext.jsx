import { createContext, useRef } from "react";

export const NavigationContext = createContext()

export const NavigationProvider = ({children}) => {
  const about = useRef(null)
  const skills = useRef(null)
  const experience = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  
  return (
    <NavigationContext.Provider value={{about, experience, skills, projects, contact}}>
      {children}
    </NavigationContext.Provider>
  )
}