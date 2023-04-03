"use client";
import React, { useState } from 'react'

const SearchBar = () => {

    const [searchQuery,setSearchQuery] = useState("")
    console.log(searchQuery)

  return (
    <div>
      <input 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"  
            placeholder='Search...'
        />
    </div>
  )
}

export default SearchBar
