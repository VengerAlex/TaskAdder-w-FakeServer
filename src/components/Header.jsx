import Button from "./Button";
import { useLocation } from "react-router-dom"


const Header = ({ onAdd, showAddTask }) => {
	const location = useLocation();

	return (
		<header className="header">
			<h4>Task Manager</h4>
			{location.pathname === '/' && (<Button onAdd={onAdd} text={showAddTask ? 'Close' : 'Add Text'} color={showAddTask ? 'purple' : 'black'} />)}
		</header>
	)
}
export default Header
