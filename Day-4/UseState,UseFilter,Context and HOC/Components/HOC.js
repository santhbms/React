import React from 'react'

const HOC=(Component)=>{
   return(
    class extends React.Component{
        state={
            authStatus:true
        }
        render(){
            return(
                <div>
                {
                    this.state.authStatus?<Component/>:<h1>Sorry! You are not allowd to View this</h1>
                }
                </div>
            )
        }
    }
   )
}

export default HOC