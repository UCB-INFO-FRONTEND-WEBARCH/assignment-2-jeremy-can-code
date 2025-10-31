function TaskItem({ task, toggle_complete, delete_task}) { //receive the task object, toggle function, delete function
    //console.log('toggle_complete:', toggle_complete) getting a weird error so adding some debugging. UPDATE: fixed. was missing an import
    return (
      <li>
        <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggle_complete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
        {/* add an x button that calls delete task on this specific ID */}
        </span>
        <button onClick={() => delete_task(task.id)} className="delete-btn">×</button> 
      </li>
    )
  }
  
  export default TaskItem