'use client'
import { CategoriesContext } from "@/src/contexts/categoriesContext";
import { useContext } from "react";

export default function Categories() {
  const { categories, setCategories } = useContext(CategoriesContext);

  function itemCategoryHandler() {
    setCategories(prev => ({
      ...prev,
      items: !prev.items,
    }));
  }

  return (
    <button onClick={itemCategoryHandler}>Click me</button>
  )
}