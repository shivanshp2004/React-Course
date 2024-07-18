import React, {useState} from "react"
function App() {
  const [color, setColor] = useState("pink")
  return (
    <>
      <div
      style={{backgroundColor : color}}
      className="w-full h-screen flex flex-wrap"
      >
        <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        >
         <button className="flex flex-wrap rounded-xl justify-center px-6 py-3 mx-5 border-black border-4" style={{background:"red"}}
          onClick={()=>{setColor("red")}}>
          Red
         </button>
         <button className="flex flex-wrap rounded-xl justify-center px-6 py-3 mx-5 border-black border-4" style={{background:"green"}}
          onClick={()=>{setColor("green")}} >
          Green
         </button>
         <button className="flex flex-wrap rounded-xl justify-center px-6 py-3 mx-5 border-black border-4" style={{background:"Blue"}}
          onClick={()=>{setColor("blue")}} >
          Blue
         </button>
        </div>
        
      </div>
    </>
  )
}

export default App
