import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter =5

let [counter,setCounter]= useState(15)


 const addvalue =() =>{
 
  if(counter <=19){counter = counter+1}
  setCounter(counter)
 }

 const removevalue = () =>{
if(counter>0){

  setCounter(counter -1)
}
 }

  return (
    <>
    <h1> chai aur react </h1>
    <h2>  counter vlaue : {counter} </h2>
    <button
    onClick={addvalue}
    > Add value </button>
    <br></br>
    <button
    onClick={removevalue}
    > remove value</button>
    </>
  )
}

export default App
