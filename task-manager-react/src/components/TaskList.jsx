import TaskItem from './TaskItem'

function TaskList({ tasks }) {
  return (
    <section id="to-do-list">
      <ul>
        {tasks.map((task, index) => ( /*looping thru each task in the array */
          <>
            <TaskItem key={task.id} task={task} />
            <hr /> {/*add horizontal line for ui */}
          </>
        ))}
      </ul>
    </section>
  )
}

export default TaskList