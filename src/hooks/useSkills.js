import { useEffect, useState } from "react"
import { useApi } from "./useApi";

export const useSkills = () => {

  const [skills, setSkills] = useState([]);
  
  const {res} = useApi("getData", "POST", {"type": "skills"})

  useEffect(() => {
    if (res) {
      setSkills(res)
    }
  }, [res])

  return {
    skills
  }
}