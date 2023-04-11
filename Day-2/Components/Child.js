import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.handler}>Get Parent</button>
    </div>
  )
}

export default Child