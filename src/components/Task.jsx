import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h4>{task.text}
				<span className="close"><FaTimes onClick={() => onDelete(task.id)} /></span>
			</h4>
			<span className="date">{task.day}</span>
		</div>
	)
}

export default Task
