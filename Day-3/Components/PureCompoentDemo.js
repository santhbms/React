import React, { Component, PureComponent } from 'react'

export class PureCompoentDemo extends PureComponent {
    constructor(props) {
      super(props)    
      this.state = {
         name:'John'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{
           this.setState({name:'John'})
        },2000)
    }
  render() {
    console.log('-----------------Pure Component-------------')
    return (
      <div>
        <h1>PureCompoentDemo</h1>
      </div>
    )
  }
}

export default PureCompoentDemo