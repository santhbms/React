import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.nameref=React.createRef()
    }
    componentDidMount(){
        console.log(this.nameref.current)
        this.nameref.current.placeholder="Enter Name"
        this.nameref.current.focus()
    }
    nameHandler=()=>{
        alert(this.nameref.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" id="txtname" name="txtname" ref={this.nameref}/>
        <br/>
        <button onClick={this.nameHandler}>Get Data</button>
      </div>
    )
  }
}

export default RefsDemo