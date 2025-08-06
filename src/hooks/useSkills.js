import { useEffect, useState } from "react"

export const useSkills = () => {

  const [skills, setSkills] = useState([]);
  const url = 'http://localhost:5000/'
  
  useEffect(() => {
    fetch(url + '/api/getSkills')
    .then(res => res.json())
    .then(data => setSkills(data))
    .catch(error => console.log(error))
  }, [])

  return {
    skills
  }
}