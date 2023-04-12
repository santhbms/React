import React from 'react'

function ChildComponent({name}) {
    console.log('--------Child Component----')
  return (
    <div>
        ChildComponent
        <h1>name:{name}</h1>
    </div>
  )
}

export default React.memo(ChildComponent)