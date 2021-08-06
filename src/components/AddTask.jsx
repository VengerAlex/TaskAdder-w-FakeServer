import { useState } from 'react'

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert('Pls add your data')
			return
		}

		onAdd({ text, day, reminder })
	}


	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<div className="form-control">
					<label>Task</label>
					<input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
				</div>
				<div className="form-control">
					<label>Day And Time</label>
					<input type="text" placeholder='Add Day And Time' value={day} onChange={(e) => setDay(e.target.value)} />
				</div>
				<div className="form-control-check">
					<label>Set Reminder</label>
					<input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
				</div>

				<input value="Save Task" className="btn-submit" type="submit" />
			</form>
		</div>
	)
}

export default AddTask
