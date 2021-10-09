import React from "react";
import {Link} from "react-router-dom"
import logo from "./logoNavbar.jpg"
import user from "./user.png"



function NavbarTrabajadores(){

    return(
        <nav className="navbar">
        <div class ="logo"><img class ="logo" src={logo}/></div>
        <input type="image" class ="logouser" src={user} />
        </nav>
        
    );
}


export default NavbarTrabajadores;