'use client'

import { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState({
    guns: true,
    items: false,
  });

  return (
    <CategoriesContext value={{categories, setCategories}}>
      {children}
    </CategoriesContext>
  )
}