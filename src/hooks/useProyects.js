import { useEffect, useState } from "react"
import { projects } from "../db/projects"

export const useProyects = () => {
  const [data, setData] = useState([])
  const [loading, setLoading]= useState(false)
  const [categories, setCategories] = useState([])
  const url = 'http://localhost:5000/'

  useEffect(() => {
    setCategories(Array.from(new Set(projects.map(project => project.stack).toString().split(','))))
    fetch(url + '/api/getData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"type": "projects"})
    })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => console.log(`Error: ${e}`))
  } , [])


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