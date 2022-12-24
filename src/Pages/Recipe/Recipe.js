import './Recipe.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'


const Recipe = () => {
  const {id}=useParams()
  const url='http://localhost:3000/recipes/'+id
  const {data:recipes,pending,error}=useFetch(url)
  return (
    <div className='recipe'>
       
   {error && <p className='error'>{error}</p>}
   {pending && <p className='loading'>Loading...</p>}
   
   {recipes && (
    <>
      <h2 className='page-title'>{recipes.title}</h2>
      <p>Takes {recipes.cookingTitle} to cook</p>
      <ul>
        {recipes.ingredients.map(ing=>
<li key={ing}>{ing}</li>
        )}
      </ul>
      <p className='method'>{recipes.method}</p>
    </>
   )
    }
   </div>
   
  )
}

export default Recipe