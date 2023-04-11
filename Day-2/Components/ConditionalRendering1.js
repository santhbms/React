import React, { Component } from 'react'

export class ConditionalRendering1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    if(this.state.isLoggedIn)
    {
        return(
            <h1>Welcome Admin</h1>
        )
    }
    else{
        return(
            <h1>Welcome Guest</h1>
        )
    }
  }
}

export default ConditionalRendering1