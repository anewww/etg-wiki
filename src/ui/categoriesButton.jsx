'use client'

import { CategoriesContext } from "@/src/contexts/categoriesContext";
import { useContext } from "react";
import stylesPage from "@/src/app/page.module.css"
import clsx from "clsx"

export default function CategoriesButton() {
  const { categories, setCategories } = useContext(CategoriesContext);

  function gunCategoryHandler() {
    setCategories(prev => ({
      ...prev,
      guns: !prev.guns,
    }));
  }

  function itemCategoryHandler() {
    setCategories(prev => ({
      ...prev,
      items: !prev.items,
    }));
  }

  return (
    <>
      <button className={`${stylesPage.filterButton} ${stylesPage.filterButtonActive}`} onClick={gunCategoryHandler}>Guns</button>
      <button className={stylesPage.filterButton} onClick={itemCategoryHandler}>Items</button>
    </>
  )
}