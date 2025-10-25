function TaskItem({ task }) {
    return (
      <li>
        <input type="checkbox" checked={task.completed} /> 
        {task.text}
      </li>
    )
  }
  
  export default TaskItem