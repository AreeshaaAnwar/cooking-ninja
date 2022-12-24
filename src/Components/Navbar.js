import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='Navbar'>
    <nav>
<Link to='/' className='brand'>
    <h1>Cooking Ninja</h1>
</Link>
<SearchBar/>
<Link to='/Create'>Create Recipes</Link>
    </nav>

    </div>
  )
}

export default Navbar