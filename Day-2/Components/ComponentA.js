import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         name:'John'
      }
    console.log('Component-A','Constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('Component-A','getDerivedStateFromProps')
        return null;
    }
    componentDidMount()
    {
        console.log('Component-A','componentDidMount')
    }
    componentDidUpdate()
    {
        console.log('Component-A','componentDidUpdate')
    }
    shouldComponentUpdate()
    {
        console.log('Component-A','shouldComponentUpdate')
        return null;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('Component-A','getSnapshotBeforeUpdate')
        return null;
    }

    changeState=()=>{
        this.setState({name:'Steve'})
    }
  render() {
    console.log('Component-A','render')
    return (
      <div>
        ComponentA
        <br/>
        <button onClick={this.changeState}>Change State</button>
        <ComponentB/>
      </div>
    )
  }
}

export default ComponentA