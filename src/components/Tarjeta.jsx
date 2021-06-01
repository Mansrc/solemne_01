import React from "react";
import {Link} from "react-router-dom"

function Tarjeta({img,label,texto,href}){
    return(
        <section id="target">
        <img id="imagen_card" src={img}/>
        <>
         <h2>{label}</h2>   
         {
                       texto.map((link,i )=> <label id="text" key={i}>
                            <p>{link.label}</p>
                            </label>)
                    }  

        </>
        <Link to={href}><input id="send" type="submit" value="Reservar ahora" /></Link>
        
        </section>
    )
}

export default Tarjeta;