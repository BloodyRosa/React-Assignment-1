import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import TodoTask from './components/task';


function App() {
  const [taskInput, setTaskInput] = useState('')
  const [taskList, setTaskList] = useState([{
    name: 'Curdle little buddies for 10 minutes', completed: false
    },{
    name: 'Kiss little buddies for 10 minutes', completed: false
    },{
    name: 'Play with little buddies for 10 minutes', completed: false
    }]);
    const [filter, setFilter] = useState('all');

  const submitTask=()=>{
    console.log('Submit the task')
    //只有当task input内容＞0时，才执行操作
    console.log(taskInput);
    if(taskInput.length>0){      
      const newTask = {
        name: taskInput, completed: false
        }
      const newTaskList = [...taskList, newTask];
      setTaskList(newTaskList);
      setTaskInput('');
    }
  }

  const markTaskCompleted = (index) => {
    //通过检查index，找到需要更新的task
    const updatedTaskList = taskList.map((task, i) => {
      if (i === index) {
        //只改变task的completed属性
        return { ...task, completed: true };
      }
      return task;
    });
    //重新更新taskList的全部状态
    setTaskList(updatedTaskList);
  };
  
  const filteredTaskList = taskList.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <input value={taskInput} onChange={event=>setTaskInput(event.target.value)}/>
      <button onClick={submitTask}>Add New Task</button>
      <div>
        <button onClick={() => setFilter('all')}>All Task</button>
        <button onClick={() => setFilter('completed')}>Completed Task</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete Task</button>
      </div>
      <div className='task-list'>
      {/* ask GPT为什么这种情况下map后面跟小括号而不是大括号 */}
      {filteredTaskList.map((child, index)=>(
        <TodoTask 
        key={index}
        content={child.name}
        status={child.completed}
        completeTask={()=>markTaskCompleted(index)}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
