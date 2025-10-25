function TaskItem({ task, toggle_complete }) { //receive the task object & toggle function
    console.log('toggle_complete:', toggle_complete) //getting a weird error so adding some debugging
    return (
      <li>
        <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggle_complete(task.id)}
        />
        {task.text}
      </li>
    )
  }
  
  export default TaskItem