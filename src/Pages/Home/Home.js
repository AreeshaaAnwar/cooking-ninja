import './Home.css'
import { useFetch } from '../../Hooks/useFetch'
import React from 'react'
import RecipeList from '../../Components/RecipeList'

const Home = () => {
    const {data,pending,error}=useFetch(' http://localhost:3000/recipes')
  return (
    <div className='home'>
   {error && <p className='error'>{error}</p>}
   {pending && <p className='loading'>Loading...</p>}
   {
    data && <RecipeList recipes={data}/>}
   </div>
  )
}

export default Home