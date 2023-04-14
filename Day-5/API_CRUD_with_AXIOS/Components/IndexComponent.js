import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class IndexComponent extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         users:[]
      }
    }
    componentDidMount()
    {
       axios.get('https://reqres.in/api/users?page=2')
       .then(result=>{
        console.log('axios get',result.data.data)
        this.setState({users:result.data.data})
       })
    }
  render() {
    const {users} =this.state
    return (
      <div className='mt-3'>
        <div className='mt-3'>
          <Link to={'/add'} className='btn btn-success mb-3'>Add User</Link>
        </div>
         <table className='table table-responsive table-bordered'>
            <thead>
                <tr className='bg-success text-white'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length?users.map((x,i)=>
                     <tr key={i}>
                       <td>{x.id}</td>
                       <td>{x.first_name} {x.last_name}</td>
                       <td>{x.email}</td>
                       <td>
                        <Link to={`/Edit/${x.id}`} className='btn btn-warning'>Edit</Link>
                        <Link to={`/Delete/${x.id}`} className='btn btn-danger'>Delete</Link>
                        </td>
                     </tr>
                    ):null
                }
            </tbody>
         </table>
      </div>
    )
  }
}

export default IndexComponent