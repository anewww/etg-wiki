'use client'

import { useState, createContext, useEffect } from "react"
// import items from "@/public/data/guns.json"

export const ItemsContext = createContext(null);

export function ItemsProvider({ children }) {
  const [items, setItems] = useState({
    list: [],
    loading: true,
  });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/items.json")
      .then((res) => res.json())
      .then((json) => {
        setItems({
          object: json,
          list: json.items,
          loading: false,
        })
      })
      // .finally(() => {
      //   setItems({
          
      //   })
      // });
  }, []);
  
  return (
    <ItemsContext value={items}>
      {children}
    </ItemsContext>
  )
}