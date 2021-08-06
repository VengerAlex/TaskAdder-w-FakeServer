import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="footer">
			<Link className="link" to='/About'>About this project</Link>
			<p className="copy">Coryright 2021</p>
		</footer>
	)
}
export default Footer
