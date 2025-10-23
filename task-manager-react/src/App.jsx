import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <label htmlFor="menu-toggle" className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <TaskForm />           {/* Search form component */}
        <TaskCounter />        {/* Counter component */}
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
          <TaskList />         {/* Task list component */}
        </main>
      </div>
    </>
  )
}

export default App