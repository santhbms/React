import React,{useState,useEffect} from 'react'

function Demo3() {
    const[counter,setCounter]=useState(0)
    function clickhandler()
    {
       setCounter(counter+1)
    }
    useEffect(()=>{
      console.log('Use Effect Invoked')
    },[counter])

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>clickhandler()}>Increment</button>
    </div>
  )
}

export default Demo3