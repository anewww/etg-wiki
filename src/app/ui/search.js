'use client'

import { useContext } from 'react'
import styles from './search.module.css'
import { SearchContext } from '@/src/contexts/searchContext'

export default function Search({ className }) {
  const { query, setQuery } = useContext(SearchContext);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
    <search className={`${styles.search} ${className}`}>
        <img src="/icons/icon-search.svg" className={styles.icon}></img>
        <input autoFocus type="search" id="search" name="search" placeholder="Search anything..." onChange={handleChange} autoComplete="off" />
    </search>
    </>
  )
}