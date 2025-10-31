import TaskItem from './TaskItem'

function TaskList({ tasks, toggle_complete, delete_task }) { //needs to receive the complete status as a prop
  console.log("In TaskList, toggle_complete:", toggle_complete)
    return (
    <section id="to-do-list">
      <ul>
        {tasks.map((task) => ( /*looping thru each task in the array */
          <>
            <TaskItem key={task.id} task={task} toggle_complete= {toggle_complete} delete_task={delete_task}/>
            <hr /> {/*add horizontal line for ui */}
          </>
        ))}
      </ul>
    </section>
  )
}

export default TaskList