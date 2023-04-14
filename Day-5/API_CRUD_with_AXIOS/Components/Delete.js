import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Delete() {
  const {id}=useParams();
  console.log(id)

  axios.delete('https://reqres.in/api/users/'+id)
  .then(result=>{
    console.log(result);
    alert('User Record Deleted successfully!')
        window.location='../'
  }).catch(err=>{
    console.log(err)
  })

  
  return (
    <div>Delete</div>
  )
}

export default Delete