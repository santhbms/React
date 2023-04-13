import React,{useState} from 'react'

function Demo2() {
    const[name,setName]=useState('')
    const changehandler=(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" name="name" value={name} onChange={changehandler}/>
    </div>
  )
}

export default Demo2