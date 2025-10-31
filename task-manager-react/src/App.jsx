import { useState } from 'react'
import TaskCounter from './components/TaskCounter'
import Task_form from './components/TaskForm'
import TaskList from './components/TaskList'
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
      id: Date.now(),
      text: task_text,
      completed: false
    }
    setTasks(tasks.concat(new_task))
  }

  const [filter, setFilter] = useState('all')

  const toggle_complete = (task_id) => {
    setTasks(tasks.map(task =>
      task.id === task_id
        ? { id: task.id, text: task.text, completed: !task.completed }
        : task
    ))
  }
  
  // filter out of task array to delete
  const delete_task = (task_id) => {
    setTasks(tasks.filter(task => task.id !== task_id))
  }

  // Filter tasks based on current filter state
  const filtered_tasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed  // Show incomplete tasks
    if (filter === 'completed') return task.completed  // Show completed tasks
    return true  // Show all tasks
  })
  console.log('filter:', filter)
  console.log('filtered_tasks:', filtered_tasks)
  return ( 
    <>
      <header className="site-header">
        <label htmlFor="menu-toggle" className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <form className="search-form">
          <input type="text" placeholder="Quick Find" />
        </form>
        <TaskCounter 
          total={filtered_tasks.length} 
          completed={tasks.filter(task => task.completed).length} 
        />
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
            <div className="filters">
              <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
              <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
              <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
            </div>
          </section>
          <Task_form add_task={add_task} />
          <TaskList tasks={filtered_tasks} toggle_complete={toggle_complete} delete_task={delete_task} />
        </main>
      </div>
    </>
  )
}

export default App