import React from 'react'

const Student=(props)=> {
    const {name,department}=props;
  return (
    <div>
        <hr/>
        <h1>Name:{name}</h1>
        <h2>department:{department}</h2>
        <hr/>
    </div>
  )
}

export default Student