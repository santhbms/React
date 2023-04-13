import React, { Component } from 'react'

export class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:0,
            first_name: '',
            last_name: '',
            email: ''
        }
    }
   changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }

   componentDidMount()
   {
    
      const _id=window.location.pathname.split('/')[2];
      fetch('https://reqres.in/api/users/'+_id)
      .then(res=>{return res.json()})
      .then(result=>{
         console.log(result.data)
         this.setState(
            {
                id:result.data['id'],
                first_name:result.data['first_name'],
                last_name:result.data['last_name'],
                email:result.data['email']
            }
         )
      })
   }


   submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state)
    fetch('https://reqres.in/api/users/'+this.state.id,
    {method:'PUT',headers:{'Content-type':'application/json'},
    body:JSON.stringify(this.state)})
    .then(res=>{
        return 'Response',res.json()        
    }).then(result=>{
        console.log(result)
        alert('User Record Updated successfully!')
        window.location='../'
    }).catch(err=>{
        console.log('Error',err)
    })
   }

    render() {
        const { first_name, last_name, email } = this.state
        return (
            <div className='container'>
                <form className='container border border-success mt-5' style={{padding:'3%'}} onSubmit={this.submitHandler}>
                    <div className='alert alert-success'>
                        <center>Edit User</center>
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
                            <button type="submit" className='btn btn-success'>Update User</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit