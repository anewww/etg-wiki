'use client'

import stylesPage from "@/src/app/page.module.css"
import { useRef, useEffect } from "react";
import CategoriesButton from "@/src/ui/categoriesButton"
import Search from "@/src/ui/search"

export default function Filter() {
  const filterRef = useRef(null);
  // console.log("ref:", filterRef)

  useEffect(() => {
    if (filterRef.current) {
      const height = filterRef.current.offsetHeight + 18;
      document.documentElement.style.setProperty("--filter-height", `${height}px`);
    }
  }, []);

  return (
    <div
      className={stylesPage.filter}
      ref={filterRef}
    >
      <span>Choose a category:</span>
      <ul>
        <CategoriesButton />
        {/* <li><a href="#">Guns</a></li>
        <li><a href="#">Items</a></li> */}
      </ul>
      <Search></Search>
    </div>
  )
}