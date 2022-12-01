import './App.css';
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import {tasks} from "./data"
// functional comp

function App() {
const [newList, setNewList] = useState(tasks)
  const addTask=(desc,user)=>{
console.log({description:desc,user,isDone:false});
setNewList([...newList,{description:desc,user,isDone:false,id:newList.length+1}])
  }
  return (
    <div className="App">
      <AddTask addTask={addTask} />
      <TaskList tasks={newList} />
    </div>
  );
}

export default App;