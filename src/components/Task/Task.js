import React from 'react'

const Task = ({el}) => {
  return (
    <div><h1>{el.description}</h1>
    <h5>{el.user}</h5></div>
  )
}

export default Task