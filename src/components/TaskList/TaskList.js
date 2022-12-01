import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasks}) => {
  return (
    <div>{tasks.map(el=><Task key={el.id} el={el}/>)}</div>
  )
}

// tasks =[{1},{2}]  ==> [<Task {1}/>,<Task {2}/>]
export default TaskList