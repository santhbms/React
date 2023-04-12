import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalsDemo() {
  return ReactDOM.createPortal(
    <div>
        <h1>This is Sample Text</h1>
    </div>,
    document.getElementById('test-root')
  )
}

export default PortalsDemo