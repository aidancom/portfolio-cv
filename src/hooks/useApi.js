import { useState, useEffect } from "react";

export const useApi = (endpoint, meth = "GET", body = null) => {
  const [res, setRes] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}/api/${endpoint}`, {
        method: meth,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (response.ok) {
        const data = await response.json();
        setRes(data);
        return; 
      } else {
        console.warn(`Error: ${response.status}`);
      }
    } catch (err) {
      console.warn(`Error: ${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, meth, body]);

  return { res };
};
