import React from 'react'

function ProductsComponent(props) {
    if(props.category!='Electronics')
    {
       throw new Error('Invalid Category')
    }
  return (
    <div>
        <hr/>
        <h1>Name:{props.name}</h1>
        <h2>Category:{props.category}</h2>
        <hr/>
    </div>
  )
}

export default ProductsComponent