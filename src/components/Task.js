import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDeleteTask,onToggleReminder}) => {
    return (
        <div className = 'task' onDoubleClick = {()=> onToggleReminder(task.id)}>
            <h3 className = {`task ${task.reminder ? 'reminder': ''}`}>
            {task.text}
            <FaTimes style = {{color: 'red'}} onClick = {()=> onDeleteTask(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
