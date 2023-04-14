import React, { useState } from 'react'

function Demo(props) {
    const[counter,setCounter]=useState(0)
    function clickhandler()
    {
        setCounter(counter+1)
    }
  return (
    <div>
        <h1>Welcome</h1>
        <h2>Name:{props.name}</h2>
        <div>
            <h1>Count:{counter}</h1>
            <button onClick={clickhandler}>Increment</button>
        </div>
    </div>
  )
}

export default Demo