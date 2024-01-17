import React, { useState } from 'react'

import './App.css'
import Result from './Result';



function App() {
  const SecretNumber= Math.floor(Math.random()*10)+1 
  const[terms,setTerma]=useState('')
  console.log(terms);
  const handleChange=(e)=>{
    setTerma(e.target.value)
  }
  return (
    <div className='container'>
    
    <div className='header'>
        <label htmlFor='term'>Guess the number between 1 and 10 </label>
    </div>

    <input type='text' id='term' name='term' onChange={handleChange}/>

    <Result SecretNumber ={SecretNumber}  terms={terms}/>

    </div>
  )
}

export default App