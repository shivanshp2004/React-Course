import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Navbar = () => {
  const count=useSelector((state)=> state.counter.value)
  return (
    <div> count is {count}
    </div>
  )
}

export default Navbar