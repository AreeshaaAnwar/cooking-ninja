import './Create.css'
import React, { useRef } from 'react'
import { useState,useEffect } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate=useNavigate()
 const[title,setTitle]=useState('')
 const[method,setmethod]=useState('')
 const[cookingTime,setcookingTime]=useState('')
 const[newIngredients,setnewIngredients]=useState('')
 const[Ingredients,setIngredients]=useState([])
 const ingredientInput=useRef(null)
 const {postData,data,error}=useFetch('http://localhost:3000/recipes','POST')
 const handleSubmit = (e)=>{

  e.preventDefault()

  postData(

    {title,method,Ingredients,cookingTime:cookingTime + "minutes"})

   console.log({title,method,Ingredients,cookingTime:cookingTime + "minutes"})

}
 const handleAdd=(e)=>{
  e.preventDefault();
  const ing=newIngredients.trim()
  
  if(ing && !Ingredients.includes(ing))
  {
setIngredients(prevIngredients=>[...prevIngredients,ing])

  }
  // console.log(Ingredients)
  setnewIngredients('')
  ingredientInput.current.focus()
 }

///redirect the user hen we get ata response
useEffect(() => {
if(data){
  console.log("Dtasdsadads" , postData)

navigate('/')
} 
}, [data])




  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Recipe title:</span>
          <input type='text' value={title} required 
          onChange={(e)=>setTitle(e.target.value)}></input>
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input type='text' onChange={(e)=>setnewIngredients(e.target.value)} value={newIngredients}  ref={ingredientInput}></input>
            <button className='btn'  onClick={handleAdd}>add</button>
          </div>
        </label>
        <p>current Ingredients:{Ingredients.map(i=><em key={i}>{i},</em>)}</p>
        <label>
<span>Recipe method:</span>
<textarea required onChange={(e)=>setmethod(e.target.value)} value={method}></textarea>
        </label>
        <label>
          <span>Cooking time (minutes)</span>
          <input  type='number' value={cookingTime} required onChange={(e)=>setcookingTime(e.target.value)}></input>
        </label>
 <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Create
