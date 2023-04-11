import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'Guest'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent()
    {
        // alert('Hello'+this.state.username);
        alert(`Hello ${this.state.username}`);
    }
  render() {
    return (
      <div>
        <Child handler={this.greetParent}/>
      </div>
    )
  }
}

export default Parent