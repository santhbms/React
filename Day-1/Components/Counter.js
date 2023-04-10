import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={counter:0}
    }
    increment(){
        console.log("Normal:",this.state.counter)
        //this.state.counter=this.state.counter+1
        //this.setState({counter:this.state.counter+1})
        // this.setState({counter:this.state.counter+1},()=>{
        //     console.log("Call Back:",this.state.counter)
        // })
        this.setState((prevState,props)=>({
            counter:prevState.counter+1
        }))
    }
    multipleincrement()
    {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
  render() {
    return (
      <div>
        <h1>Count:{this.state.counter}</h1>
        <button onClick={()=>this.multipleincrement()}>Increment</button>
      </div>
    )
  }
}

export default Counter