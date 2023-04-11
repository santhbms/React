import React, { Component } from 'react'

export class EventBindingsDemo1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Good Morning'
      }
      this.changemsg=this.changemsg.bind(this);
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
          <button onClick={this.changemsg}>Click Me</button>
      </div>
    )
  }
}

export default EventBindingsDemo1