import { useEffect, useState } from "react"

export const useSkills = () => {

  const [skills, setSkills] = useState([]);
  const url = 'https://portfolio-cv-backend-ltln.onrender.com'
  
  useEffect(() => {
    fetch(url + '/api/getData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"type": "skills"})
    })
    .then(res => res.json())
    .then(data => setSkills(data))
    .catch(error => console.log(error))
  }, [])

  return {
    skills
  }
}