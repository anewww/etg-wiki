'use client'

import { useState } from "react";
import Link from "next/link";

import styles from "@/src/ui/burgerMenu.module.css";
import BurgerIconClose from "@/public/icons/burger-menu-close.svg";

export default function BurgerMenu({ isOpened, onClick}) {
  return (
    <div className={`${styles.underlay}`} onClick={onClick}>
      <div className={`${styles.burger}`} onClick={e => e.stopPropagation()}>
        <button className={`${styles.button}`}>
            <BurgerIconClose className={`${styles.iconClose}`} onClick={onClick} />
        </button>
        {/* <div className={`${styles.nav}`}>ahsuop</div> */}
        <nav className={`${styles.nav}`}>
          <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div></div>
      </div>
    </div>
  );
}