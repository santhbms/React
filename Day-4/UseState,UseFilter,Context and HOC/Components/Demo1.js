import React,{useState} from 'react'

function Demo1() {
   const [counter,setCounter]=useState(0)
   function clickhandler()
   {
    setCounter(counter+1)
   }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>clickhandler()}>Increment</button>
    </div>
  )
}

export default Demo1