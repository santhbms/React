import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class RegularComponent extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         name:'Javed'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{
          this.setState({name:'Javed'})
        },2000)
    }
  render() {
    console.log('--------------Regular Component-----------------')
    return (
      <div>
        <h1>RegularComponent</h1>
        <ChildComponent name={this.state.name}/>
      </div>
    )
  }
}

export default RegularComponent