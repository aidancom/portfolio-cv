import { useEffect, useState } from "react"
import { useApi } from "./useApi"

export const useProyects = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading]= useState(false)
  const [categories, setCategories] = useState([])


    const {res} = useApi("getData", "POST", {"type": "projects"})
  
    useEffect(() => {
      if (res) {
        setData(res)
      }
    }, [res])

  useEffect(() => {
    if (data.length > 0) {
      setCategories(Array.from(new Set(data.map(project => project.stack).flat())))
    }
  }, [data])


  const handleChange = (e) => {
    setLoading(true)
    setTimeout(() => {
      setFilteredData(data.filter(project => project?.stack.includes(e.target.value)))
      setLoading(false)
    }, 1000);
    
  }

  return {
    data,
    handleChange,
    categories,
    loading,
    filteredData
  }
}