'use client'

import { useState, createContext, useEffect } from "react"
// import items from "@/public/data/guns.json"

export const GunsContext = createContext(null);

export function GunsProvider({ children }) {
  // const [guns, setGuns] = useState([]);
  const [guns, setGuns] = useState({
    list: [],
    loading: true,
  });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/guns.json")
      .then((res) => res.json())
      .then(json => {
        setGuns({
          list: json,
          loading: false,
        })
      })
      // .finally(() => console.log())
  }, []);
  
  return (
    <GunsContext value={guns}>
      {children}
    </GunsContext>
  )
}