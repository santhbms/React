const count=0
function Reducer(state=count,action) {
  const{type,payload}=action
  switch(type)
  {
    case "increment":
        return state+payload
    case "decrement":
        return state-payload
    default:
        return count
  }
}

export default Reducer