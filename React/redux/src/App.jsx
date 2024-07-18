import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function App() {  
  const count=useSelector((state)=> state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <Navbar/>
      <button onClick={()=>dispatch(increment())}>+</button>
    </>
  )
}

export default App
