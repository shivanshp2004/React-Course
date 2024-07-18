import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='bg-gray-800 flex flex-wrap p-6 text-white '>
    <NavLink to="/" className={(e)=> {
      return (e.isActive ? "text-red-400 ml-6 mr-6" : "text-white ml-6 mr-6")
    }}>Home</NavLink>
    <NavLink to="/about" className={(e)=> {
      return (e.isActive ? "text-red-400 ml-6 mr-6" : "text-white ml-6 mr-6")
    }}>About</NavLink>
    <NavLink to="/contact" className={(e)=> {
      return (e.isActive ? "text-red-400 ml-6 mr-6" : "text-white ml-6 mr-6")
    }}>Contact</NavLink>
    </div>
    </>
  )
}

export default Navbar