import React from 'react'

function Alert(props) {
  return (
    //Initially props.alert mera null hai to error ayegi to ye syntax use kiya hai 
    //&& (and) operator use krte hai js ke andar to first chiz evaluate hogi 
    // suppose vohi null or false ho jati hai to ageka function run hi nahi hoga
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
