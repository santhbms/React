import React, { Component } from 'react'

class Students extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h1>Name:{this.props.name}</h1>
        <h1>Age:{this.props.age}</h1>
        <h2>{this.props.children}</h2>
        <hr/>
      </div>
    )
  }
}

export default Students