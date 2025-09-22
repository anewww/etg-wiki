'use client'

import { useState } from "react";
import Search from "@/src/ui/search";
// import { Hanken_Grotesk } from "next/font/google";

export default function Items() {
  const [query, setQuery] = useState("");

  const items = [
    'someitem',
    'asjdkl',
    'asjdlkf'
  ]

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  function handleChange(e) {
    setQuery(e.target.value)
  }
  
  return (
    <>
      <Search query={query} setQuery={setQuery} onChange={handleChange} />
      {/* <ul>
        {filteredItems.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul> */}
    </>
  )
}