'use client'

import { useState, createContext } from "react"
import InfoPanel from "../app/ui/infoPanel";
import styles from "@/src/app/page.module.css";
import baseContainer from "@/src/app/baseContainer.module.css"
import Search from "../app/ui/search";

export const HoverContext = createContext(null);

export function HoverProvider({ children }) {
  const [hovered, setHovered] = useState(false);
  const [hoverId, setHoverId] = useState(null);
  
  return (
    <HoverContext value={{ hovered, setHovered, setHoverId }}>
      <div className={`${baseContainer.baseContainer}`}>
        <div className={styles.filter}>
          Choose a category: 
          <ul>
            <li><a href="#">Guns</a></li>
            <li><a href="#">Items</a></li>
            <li><a href="#">Shrines</a></li>
            <li><a href="#">Bosses</a></li>
            <li><a href="#">Consumables</a></li>
          </ul>
          <Search></Search>
        </div>
        <div className={styles.grid}>
          <aside className={styles.aside}>
            <InfoPanel hoverId={hoverId} />
          </aside>
          {children}
        </div>
      </div>
    </HoverContext>
  )
}