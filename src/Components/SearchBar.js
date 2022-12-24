import './SearchBar.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {
    const[term,setterm]=useState('')
  const navigate=useNavigate()
    
   const handleSubmit = (e) => {
    e.preventDefault()
navigate(`/Search?q=${term}`)
    }
    
  return (
    <div className='SearchBar'>
    <form onSubmit={handleSubmit}>
    <label htmlFor='search'>search:</label>
<input type='text' id='search' onChange={(e)=>setterm(e.target.value)}
    required
></input>
    </form>

    </div>
  )
}

export default SearchBar