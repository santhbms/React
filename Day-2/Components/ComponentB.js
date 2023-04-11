import React, { Component } from 'react'

export class ComponentB extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         name:'John'
      }
    console.log('Component-B','Constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('Component-B','getDerivedStateFromProps')
        return null;
    }
    componentDidMount()
    {
        console.log('Component-B','componentDidMount')
    }

  render() {
    console.log('Component-B','render')
    return (
      <div>ComponentB</div>
    )
  }
}

export default ComponentB