import React from 'react'

function ListDemo1() {
    const courses=['C','C++','SQL','Java']
  return (
    <div>
        <ol>
            {
                courses.map((course,index)=>
                    <li key={index}>{course}</li>)
            }
        </ol>
    </div>
  )
}

export default ListDemo1