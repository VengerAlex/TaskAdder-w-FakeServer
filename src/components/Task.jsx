const Task = ({ task }) => {
	return (
		<div className="task">
			<h4>{task.text}</h4>
			<span className="date">{task.day}</span>
		</div>
	)
}

export default Task
