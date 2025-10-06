'use client'

import { useState } from "react";

import stylesLayout from "@/src/app/layout.module.css";
import BurgerMenu from "@/src/ui/burgerMenu";
import BurgerButton from "@/src/ui/burgerButton";

export default function Header({ children }) {
  const [isOpened, setIsOpened] = useState(false);

  const openHandler = () => {
    setIsOpened(true);
  }

  const closeHandler = () => {
    setIsOpened(false);
  }

  return (
    <div className={`${stylesLayout.header}`}>
      {children}

      <div className={`${stylesLayout.burger}`}>
        {!isOpened && (<BurgerButton isOpened={isOpened} onClick={openHandler} />)}
        {isOpened && (<BurgerMenu isOpened={isOpened} onClick={closeHandler} />)}
      </div>
    </div>
  );
}