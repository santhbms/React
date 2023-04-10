import React, { Component } from 'react'

export class Login extends Component {
    constructor() {
      super()    
      this.state = {
         username:'Guest'
      }
    }
    loginvalidate()
    {
        this.setState({username:'Admin'})
    }
  render() {
    return (
      <div>
       <h1>Welcome {this.state.username}</h1>
       <button onClick={()=>this.loginvalidate()}>Login</button>
      </div>
    )
  }
}

export default Login