import React, { useContext } from 'react'
import { Context } from './context'
const App = () => {
  const context=useContext(Context)
  return (
    <>
      <div>{context.count}</div>
    </>
  )
}

export default App