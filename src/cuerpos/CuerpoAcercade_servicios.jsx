import React from "react"
import Separacion from "../components/Separacion"
import logo1 from "../components/1.jpg"
import logo2 from "../components/2.jpg"
import logo3 from "../components/3.jpeg"


function CuerpoAcercade_servicios(){
    return(
        <>
        <Separacion/>
        <div className ="Acercade_servicios"> <img src={logo1} class="Acercade_servicios_interiorfoto"/> 
        <p class="Acercade_servicios_interior">Scanner silver: este servicio significa que se le entregara al cliente
                        solamente la lectura de su vehículo.
                                                        </p> </div>





        <div className ="Acercade_servicios"> <img src={logo2} class="Acercade_servicios_interiorfoto"/>
         <p class="Acercade_servicios_interior">Scanner Gold: en este servicio el profesional aparte de entregar 
                       la lectura del Scanner, le hará una revisión 
                       exhaustiva para comprender la falla y lo que debe 
                       hacer para repararla.</p> </div>





        <div className ="Acercade_servicios"> <img src={logo3} class="Acercade_servicios_interiorfoto"/>
         <p class="Acercade_servicios_interior">Scanner Platinium: en este servicio el profesional resolverá el 
                       problema eléctrico de su vehículo mas un
                       diagnostico correcto de este.</p> </div>
        </>
    );
} 

export default CuerpoAcercade_servicios;