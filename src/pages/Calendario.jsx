import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Separacion from '../components/Separacion'

function Calendario(){
	const linkto=<Link to="/"></Link>
	return(
		<>
		<Navbar/>
		<Separacion/>
		<Calendar className="calendario" onClickDay={linkto}></Calendar>
		</>

)
}

export default Calendario 
