import { useEffect, useState } from "react"
import { projects } from "../db/projects"

export const useProyects = () => {
  const [data, setData] = useState(projects)
  const [loading, setLoading]= useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => setCategories(Array.from(new Set(projects.map(project => project.stack).toString().split(',')))), [])

  const handleChange = (e) => {
    setLoading(true)
    setTimeout(() => {
      setData(projects.filter(project => project?.stack.includes(e.target.value)))
      setLoading(false)
    }, 1000);
    
  }

  return {
    data,
    handleChange,
    categories,
    loading
  }
}