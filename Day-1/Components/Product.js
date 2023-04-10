import React from 'react'

const Product=(props)=> {
  return (
    <>
        <hr/>
          <h1>Name:<span className='text-danger'>{props.name}</span></h1>
          <h2>Price:<span className='text-danger'>{props.price}</span></h2>
          <h3>{props.children}</h3>
        <hr/>
    </>
  )
}

export default Product