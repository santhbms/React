import React, { Component } from 'react'

export class ErrorHandlerComponent extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(err)
    {
        return {hasError:true}
    }
    componentDidCatch(error,info)
    {
        console.log(error)
        console.log(info)
    }
  render() {
    if(this.state.hasError)
    {
    return (
      <div>
        <h1>OOPS Something Went Wrong!</h1>
      </div>
    )
    }
    return this.props.children
  }
}

export default ErrorHandlerComponent