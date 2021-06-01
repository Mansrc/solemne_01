import React from "react"
import {Link} from "react-router-dom"

function CuerpoInicio(){
    return(
        <>
         <section id="fondo">
         <Link to="/servicios"><input type="submit" value="Reservar hora aqui" class="boton_reserva_hora"/></Link>
         <h1 class="pie_boton">Servicio de scanner automotriz</h1>
         
        </section>
       
          
        </>
    );
}

export default CuerpoInicio;