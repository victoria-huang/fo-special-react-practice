import React from 'react'

const Error = (props) => {
  return (
    <div className="error">
      {props.message} &nbsp;
      <button onClick={props.removeError}>X</button>
    </div>
  )
}

export default Error;
