import React from 'react'

function EVentBindingsDemo4() {
    function fnsample()
    {
        alert('Thanks for click');
        
    }
  return (
    <div>
        <button onClick={fnsample}>Click Me</button>
    </div>
  )
}

export default EVentBindingsDemo4