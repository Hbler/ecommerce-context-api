import { createContext, useEffect, useState } from "react";

import API from "../services/api";

export const DatabaseContext = createContext({});

export const DatabaseProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("@Kenzieshop:data")) || [];
    setProducts([...savedData]);

    if (savedData.length === 0) {
      API.get()
        .then((res) => {
          setProducts([...res.data]);
          localStorage.setItem("@Kenzieshop:data", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <DatabaseContext.Provider value={{ products }}>
      {children}
    </DatabaseContext.Provider>
  );
};
