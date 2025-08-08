import { useEffect, useState } from "react"

export const useProyects = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading]= useState(false)
  const [categories, setCategories] = useState([])
  const url = 'https://portfolio-cv-backend-ltln.onrender.com'

  useEffect(() => {
    
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