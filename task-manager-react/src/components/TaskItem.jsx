function TaskItem({ taskName }) {
    return (
      <li>
        <input type="checkbox" name="todo" /> {taskName}
      </li>
    )
  }
  
  export default TaskItem