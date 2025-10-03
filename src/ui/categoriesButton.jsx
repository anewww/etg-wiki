'use client'

import { CategoriesContext } from "@/src/contexts/categoriesContext";
import { useContext, useState } from "react";
import stylesPage from "@/src/app/page.module.css"
import clsx from "clsx"
import { isatty } from "tty";

export default function CategoriesButton() {
  const { categories, setCategories } = useContext(CategoriesContext);
  const [isActive, setIsActive] = useState({
    gunsButton: true,
    itemsButton: false,
  });

  function gunCategoryHandler() {
    setCategories(prev => ({
      ...prev,
      guns: !prev.guns,
    }));
    setIsActive(prev => ({
      ...prev,
      gunsButton: !prev.gunsButton,
    }));
  }

  function itemCategoryHandler() {
    setCategories(prev => ({
      ...prev,
      items: !prev.items,
    }));
    setIsActive(prev => ({
      ...prev,
      itemsButton: !prev.itemsButton,
    }));
  }

  return (
    <>
      <button 
        className={clsx({
          [stylesPage.filterButton]: true,
          [stylesPage.filterButtonActive]: isActive.gunsButton,
        })} 
        onClick={gunCategoryHandler}
      >
        Guns
      </button>
      <button
        className={clsx({
          [stylesPage.filterButton]: true,
          [stylesPage.filterButtonActive]: isActive.itemsButton,
        })}
        onClick={itemCategoryHandler}
      >
        Items
      </button>
    </>
  )
}