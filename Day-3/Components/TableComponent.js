import React from 'react'
import Columns from './Columns'
import Rows from './Rows'

function TableComponent() {
  return (
    <div>
        <table className='table table-resonsive table-bordered'>
            <thead>
               <Columns/>
            </thead>
            <tbody>
               <Rows/>
            </tbody>
        </table>
    </div>
  )
}

export default TableComponent