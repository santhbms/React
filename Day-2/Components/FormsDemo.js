import React, { Component } from 'react'

export class FormsDemo extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         name:'',
         mobile:'',
         city:'DEL'
      }
    }

    handleChangeName=(event)=>{
        // console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    handleChangeMobile=(event)=>{
        this.setState({mobile:event.target.value})
    }
    handleChangeCity=(event)=>{
        this.setState({city:event.target.value})
    }

    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }


    render()
    {
  return (
    <div>
       <form onSubmit={this.submitHandler}>
          Name:
          <input type='text' defaultValue={this.state.name} onChange={this.handleChangeName}/>
          <br/>
          Mobile:
          <input type="text" defaultValue={this.state.mobile} onChange={this.handleChangeMobile}/>
          <br/>
          City:
          <select defaultValue={this.state.city} onChange={this.handleChangeCity}>
              <option value="">--select--</option>
              <option value="CHN">Chennai</option>
              <option value="BNG">Bengaluru</option>
              <option value="DEL">Delhi</option>
          </select>
          <br/>
          <button type='submit'>Submit</button>
       </form>
    </div>
  )
}
}
export default FormsDemo
