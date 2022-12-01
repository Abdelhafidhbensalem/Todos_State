import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const [desc, setDesc] = useState("")
  const [user, setUser] = useState("")
  return (
    <div>
      <input type="text" placeholder="add desc" onChange={(e) => setDesc(e.target.value)}/>
      <input type="text" placeholder="add user" onChange={(e) => setUser(e.target.value)}/>
      <button onClick={()=>addTask(desc,user)}>add</button>
    </div>
  )
}

export default AddTask