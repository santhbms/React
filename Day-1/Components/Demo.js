import React from 'react'

function Demo() {
//   return (
//     <div>
//         <h1>Hello World!</h1>
//     </div>
//   )
return React.createElement('div',{id:'sampleDiv',name:'sampleDiv',className:'alert alert-success'},
React.createElement('h1',{id:'testHeading',className:'text-danger'},'Hello User Welcome'))

}

export default Demo