import React, { Component } from 'react'
import axios from 'axios'

export class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }
   changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }

   submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state)
    axios.post('https://reqres.in/api/users',this.state)
    .then(result=>{
        console.log(result)
        alert('User Record added successfully!')
        window.location='./'
    }).catch(err=>{
        console.log(err)
    })
}

//     fetch('https://reqres.in/api/users',
//     {method:'POST',headers:{'Content-type':'application/json'},
//     body:JSON.stringify(this.state)})
//     .then(res=>{
//         return 'Response',res.json()        
//     }).then(result=>{
//         console.log(result)
//         alert('User Record added successfully!')
//         window.location='./'
//     }).catch(err=>{
//         console.log('Error',err)
//     })
//    }

    render() {
        const { first_name, last_name, email } = this.state
        return (
            <div className='container'>
                <form className='container border border-success mt-5' style={{padding:'3%'}} onSubmit={this.submitHandler}>
                    <div className='alert alert-success'>
                        <center>Add User</center>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                            <input type="text" className='form-control' placeholder='Enter First Name'
                                name='first_name' defaultValue={first_name}  onChange={this.changeHandler}/>
                        </div>
                        <div className='col'>
                            <input type="text" className='form-control' placeholder='Enter Last Name'
                                name='last_name' defaultValue={last_name} onChange={this.changeHandler}/>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                            <input type="text" className='form-control' placeholder='Enter Email'
                                name='email' defaultValue={email} onChange={this.changeHandler}/>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                            <button type="submit" className='btn btn-success'>Add User</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add