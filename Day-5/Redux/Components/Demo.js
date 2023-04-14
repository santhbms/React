import React from 'react'
import {connect} from 'react-redux'
import {IncAction,DecAction} from './Actions'

function Demo({data,IncAction,DecAction}) {
  return (
    <div>
        <h1>{data}</h1>
        
        <button onClick={()=>DecAction(1)}>Decrement</button>
        <button onClick={()=>IncAction(1)}>increment</button>
    </div>
  )
}

const mapStateToProps=state=>({
    data:state
})
export default connect(mapStateToProps,{IncAction,DecAction}) (Demo)