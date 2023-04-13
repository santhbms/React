import React from 'react'

function Demo4() {
    const names=['John','James','Divya','Priya','Jagan']
    const filteredResult=names.filter(x=>x.includes('P'))

    const arr=[10,20,30,40,50,60,70,80,90]
    const filteredarr=arr.filter(x=>x>=40)
   
    const EmpArr=[
        {id:101,name:'Priya'},
        {id:102,name:'John'},
        {id:103,name:'Divya'},
        {id:104,name:'Kiran'}
    ]
    const filteredEmp=EmpArr.filter(x=>x.id>=102)

  return (
    <div>
        {
            filteredResult.map((x,i)=>
            <h1 key={i}>{x}</h1>)
        }

        {
            filteredarr.map((x,i)=>
            <h1 key={i}>{x}</h1>)
        }
        {
            filteredEmp.map((x,i)=>
            <h1 key={i}>Id:{x.id} Name:{x.name}</h1>)
        }
    </div>
  )
}

export default Demo4