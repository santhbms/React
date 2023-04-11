import React, { Component } from 'react'

export class EventBindingsDemo2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Good Morning'
      }
    }
    changemsg()
    {
       console.log(this.state)
       this.setState({msg:'Good Afternoon'})
    }

  render() {
    return (
      <div>
          <h1>{this.state.msg}</h1>
          <button onClick={this.changemsg.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default EventBindingsDemo2