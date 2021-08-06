import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
	return (
		<div className="task">
			<h4>{task.text} <span className="close"><FaTimes /></span></h4>
			<span className="date">{task.day}</span>
		</div>
	)
}

export default Task
