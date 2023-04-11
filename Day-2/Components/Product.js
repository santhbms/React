import React, { Component } from 'react'

export class Product extends Component {
  render() {
    const {name,category}=this.props;
    return (
      <div>
        <hr/>
         <h1>Name:{name}</h1>
         <h2>category:{category}</h2>
        <hr/>
      </div>
    )
  }
}

export default Product