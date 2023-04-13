import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                (name)=>{
                  return(
                  <div>
                    <h1>{name}</h1>
                  </div>
                  )
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentC