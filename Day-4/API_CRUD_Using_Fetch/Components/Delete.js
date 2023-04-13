import React from 'react'
import { useParams } from 'react-router-dom'

function Delete() {
  const {id}=useParams();
  console.log(id)
  fetch('https://reqres.in/api/users/'+id,{
    method:'DELETE'
  }).then(res=>{return res})
 .then(result=>{
    alert('Record Deleted Successfully!')
    window.location='../'
  })
  .catch(err=>{
    console.log('Error Fetch Delete',err)
  })
  return (
    <div>Delete</div>
  )
}

export default Delete