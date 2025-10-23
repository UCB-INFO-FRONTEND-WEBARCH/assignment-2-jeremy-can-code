import TaskItem from './TaskItem'

function TaskList() {
    return (
      <section id="to-do-list">
        <ul>
          <TaskItem taskName="Call Mom" />
          <hr />
          <TaskItem taskName="Buy the new issue of Scientific American" />
          <hr />
          <TaskItem taskName="Return the textbook to Josie" />
          <hr />
          <TaskItem taskName="Buy the new album by Rake" />
          <hr />
          <TaskItem taskName="Buy a giftcard for Dad" />
          <hr />
        </ul>
      </section>
    )
  }
  
export default TaskList