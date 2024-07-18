import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const Context= createContext()
export const ContextProvider = (props) => {
    const [count,setCount]=useState(0)
    return (
            <Context.Provider value={{count,setCount}}>
                {props.children}
            </Context.Provider>
  )
}