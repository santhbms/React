import React, { Component } from 'react'

export class ConditionalRendering2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    let username
    if(this.state.isLoggedIn)
    {
       username="admin"
    }
    else{
        username="Guest"
    }

    return(
        <div>
            <h1>Welcome {username}</h1>
        </div>
    )
  }
}

export default ConditionalRendering2