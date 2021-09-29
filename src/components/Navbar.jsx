import React from "react";
import {Link} from "react-router-dom"
import logo from "./logoNavbar.jpg"



function Navbar(){

    return(
        <nav className="navbar">
        <div class ="logo"><img class ="logo" src={logo}/></div>
    
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contactar">Contactanos</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li>
            <Link to ="#">Acerca de</Link>
            <ul>
                <li><Link to="/acerca_de/servicios">Servicios</Link></li>
                <li><Link to="/acerca_de/nosotros">Nosotros</Link></li>
                <li><Link to="/acerca_de/cancelar_hora">Cancelar hora</Link></li>
                <li><Link to="/acerca_de/admin">Admin</Link></li>
            </ul>
        </li>
    </ul>

</nav>
        
    );
}


export default Navbar;