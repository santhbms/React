import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParent extends Component {
    constructor(props) {
      super(props)
      this.nameref=React.createRef()
    }
    clickHandler=()=>{
        console.log(this.nameref.current)
        alert(this.nameref.current.value)
    }
  render() {
    return (
      <div>
        <FRInput ref={this.nameref}/>
        <button onClick={this.clickHandler}>Get Data</button>
      </div>
    )
  }
}

export default FRParent