import React,{useState} from 'react'

function Demo() {
    const[name,setName]=useState('Guest')
    function clickHandler()
    {
        setName('Admin')
    }
  return (
    <div>
        <h1>Name:{name}</h1>
        <button onClick={()=>clickHandler()}>Change Name</button>
    </div>
  )
}

export default Demo