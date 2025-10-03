'use client'

import { useState, createContext } from "react"
import InfoPanel from "@/src/ui/infoPanel"
import styles from "@/src/app/page.module.css"
import baseContainer from "@/src/app/baseContainer.module.css"
import Search from "@/src/ui/search"
import Categories from "@/src/ui/categoriesButton"

export const HoverContext = createContext(null);

export function HoverProvider({ children }) {
  const [hover, setHover] = useState({
    isHovered: false,
    hoverId: null,
    type: null,
  });

  // const [hovered, setHovered] = useState(false);
  // const [hoverId, setHoverId] = useState(null);
  
  return (
    <HoverContext value={{ hover, setHover }}>
      {children}
    </HoverContext>
  )
}