import React from 'react'

function ListDemo2() {
    const Courses=[
        {id:101,title:'C++',duration:'25 Days'},
        {id:102,title:'SQL',duration:'15 Days'},
        {id:103,title:'Java',duration:'60 Days'},
        {id:104,title:'C#',duration:'35 Days'},
    ]
    const data=Courses.map((x,i)=>
    <h1 key={i}>Id:{x.id}   Title:{x.title} Duration:{x.duration}</h1>)
  return (
    <div>
      {data}
    </div>
  )
}

export default ListDemo2