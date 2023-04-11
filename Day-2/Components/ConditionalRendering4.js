import React, { Component } from 'react'

export class ConditionalRendering4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
   return(
    this.state.isLoggedIn &&
    <div>
       <h1>Welcome Admin</h1>
    </div>
   
   )
  }
}

export default ConditionalRendering4