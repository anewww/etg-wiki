'use client'

import { useState, useEffect } from "react"
import Cookies from "js-cookie"

import styles from "@/src/ui/cookieBanner.module.css"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  const accept = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setVisible(false);
  }

  const refresh = () => {
    if (Cookies.get('cookie_consent')) Cookies.remove('cookie_consent');
  }

  useEffect(() => {
    // refresh();
    const consent = Cookies.get('cookie_consent');
    if (!consent || consent === 'false') setVisible(true);
  }, [])

  // console.log('consent: ', Cookies.get('cookie_consent'), '; visible: ', visible)

  if (!visible) return null;
  
  return (
    <div className={`${styles.banner}`}>
      <p>This website does not collect any personal information.</p>
      <p>No cookies. No tracking. Just content.</p>
      <button onClick={accept}>Got it</button>
    </div>
  )
}