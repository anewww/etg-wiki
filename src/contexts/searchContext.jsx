'use client'

import { useState, createContext } from "react"

export const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  
  return (
    <SearchContext value={{ query, setQuery }}>
      {children}
    </SearchContext>
  )
}