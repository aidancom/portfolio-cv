import { useState, useEffect } from "react";

export const useApi = (endpoint, meth = "GET", body = null) => {
  const [res, setRes] = useState(null);

  const backends = [
    import.meta.env.VITE_BACK_URL,
    import.meta.env.VITE_BACK_URL_BACKUP
  ];

  useEffect(() => {
    const fetchData = async () => {
      for (let backend of backends) {
        try {
          const response = await fetch(`${backend}/api/${endpoint}`, {
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
          console.warn(`Error con ${backend}, probando siguiente...`);
        }
      }
    };

    fetchData();
  }, [endpoint, meth, body]);

  return { res };
};
