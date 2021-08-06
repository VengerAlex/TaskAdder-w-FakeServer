
const Button = ({ text, color, onAdd }) => {

	return (
		<div><button onClick={onAdd} style={{ backgroundColor: color }} className="btn">{text}</button></div >
	)
}

export default Button
