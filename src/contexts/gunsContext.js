'use client'

import { useState, createContext, useEffect } from "react"
import items from "@/public/data/guns.json"

export const GunsContext = createContext(null);

export function GunsProvider({ children }) {
  const [guns, setGuns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/guns.json")
      .then((res) => res.json())
      .then(setGuns)
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <GunsContext value={{guns, loading}}>
      {children}
    </GunsContext>
  )
}