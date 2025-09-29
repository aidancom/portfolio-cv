import { useState, useEffect } from "react";

export const useApi = (endpoint, meth = "GET", body = null) => {
  const [res, setRes] = useState(null);

  const backends = [
    import.meta.env.VITE_BACK_URL,        
    import.meta.env.VITE_BACK_URL_BACKUP  
  ];

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      for (let backend of backends) {
        try {
          console.log(`Intentando backend: ${backend}`);
          const response = await fetch(`${backend}/api/${endpoint}`, {
            method: meth,
            headers: {
              "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : null,
          });

          if (response.ok) {
            const data = await response.json();
            console.log(`Éxito en backend: ${backend}`);
            if (isMounted) setRes(data);
            return;
          } else {
            console.warn(`Error HTTP en ${backend}: ${response.status}`);
          }
        } catch (err) {
          console.warn(`Error con ${backend}:`, err.message);
        }
      }
      console.error("Ningún backend respondió correctamente.");
      if (isMounted) setRes(null);
    };

    fetchData();

    return () => {
      isMounted = false; 
    };
  }, [endpoint, meth, body]);

  return { res };
};
