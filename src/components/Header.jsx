import Button from "./Button";


const Header = ({ onAdd, showAddTask }) => {

	return (
		<header className="header">
			<h4>Task Manager</h4>
			<Button onAdd={onAdd} text={showAddTask ? 'Close' : 'Add Text'} color={showAddTask ? 'purple' : 'black'} />
		</header>
	)
}
export default Header
