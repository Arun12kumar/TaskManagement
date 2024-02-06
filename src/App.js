import React from 'react'
import TaskList from './components/TaskList'
import TaskCreation from './components/TaskCreation'
import TaskUpdate from './components/TaskUpdate'
import './components/css/newapp.css'


export default function App() {
  return (
    <div className='applist'>
      
      <TaskCreation/>
      <TaskUpdate/>
      <TaskList/>
    </div>
  )
}

