import React, { createContext,useEffect,useState } from 'react'
import axios from "axios";

let ApiData = createContext()
const ContextApi = ({children}) => {
  
  let [info, setinfo] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setinfo(response.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ApiData.Provider value={info}>
    {children}
    </ApiData.Provider>
  )
}

export { ContextApi,ApiData}