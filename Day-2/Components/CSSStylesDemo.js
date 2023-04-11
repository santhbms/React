import React from 'react'
import '../styles.css'
import styles from '../appstyles.module.css'

function CSSStylesDemo(props) {
    const cssclassname=props.status?'status-online':'status-offline'
    const mystyles={
        color:'blue',
        fontSize:'38px'
    }
  return (
    <div>
       <h1 className={cssclassname}>{props.status?'Online':'Offline'}</h1>
       <h1 style={mystyles}>Sample Text</h1>

       <h2 className={styles.error}>Hello User</h2>
       <h2 className={styles.success}>Hello User</h2>
    </div>
  )
}

export default CSSStylesDemo