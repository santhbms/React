import React, { Component } from 'react'

export class ConditionalRendering3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
   return(
    this.state.isLoggedIn?
    <div>
       <h1>Welcome Admin</h1>
    </div>
    :
    <div>
<h1>Welcome Guest</h1>
    </div>
   )
  }
}

export default ConditionalRendering3