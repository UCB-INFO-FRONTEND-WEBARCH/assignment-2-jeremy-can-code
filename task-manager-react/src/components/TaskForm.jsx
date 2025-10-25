import { useState } from 'react'

function Task_form({add_task}) {
    const[input_value, set_input_value] = useState("")

    const submit = (e) => {
        e.preventDefault()
        add_task(input_value)
        set_input_value("")
    } 

    return (
        <form className="add-qtask-form" onSubmit={submit}>
            <input 
                placeholder="Add a new task..."
                value={input_value}
                onChange={(e) => set_input_value(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default Task_form