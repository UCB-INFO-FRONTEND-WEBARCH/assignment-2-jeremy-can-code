import TaskCounter from './components/TaskCounter'
import Task_form from './components/TaskForm'
import TaskList from './components/TaskList'
import { useState } from 'react'
import './App.css'

function App() { 
  const [tasks, setTasks] = useState([
    { id: 1, text: "Call Mom", completed: false },
    { id: 2, text: "Buy the new issue of Scientific American", completed: false },
    { id: 3, text: "Return the textbook to Josie", completed: false },
    { id: 4, text: "Buy the new album by Rake", completed: false },
    { id: 5, text: "Buy a giftcard for Dad", completed: false }
  ])

  const add_task = (task_text) => {
    const new_task = {
      id: Math.random(),
      text: task_text,
      completed: false
    }
    setTasks([...tasks, new_task])
  }
  
  return (
    <>
      <header className="site-header">
        <label htmlFor="menu-toggle" className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <TaskCounter />
      </header>

      <div className="flex-wrapper">
        <nav className="left-nav">
          <ul>
            <li className="inbox">
              <a href="#inbox">Inbox <span className="notification">5</span></a>
            </li>
            <li className="today">
              <a href="#today">Today <span className="notification">5</span></a>
            </li>
            <li className="upcoming">
              <a href="#upcoming">Upcoming</a>
            </li>
          </ul>
        </nav>
        
        <main>
          <section id="section-title">
            <h1>Inbox</h1>
          </section>
          <Task_form add_task={add_task} />
          <TaskList tasks={tasks} />
        </main>
      </div>
    </>
  )
}  

export default App