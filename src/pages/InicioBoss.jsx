import React from "react";
import NavbarTrabajadores from "../components/NavbarTrabajadores";
import Separacion from "../components/Separacion"
import imagen from "../components/4.jpeg"






function InicioBoss(){
    return(
        <>
        <NavbarTrabajadores />
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
           
            
        
        <div id="serviciosdiarios">
            <header>
                <button className="BotonBoss">Servicios diarios</button>

                    <button className="BotonBoss">Horas canceladas</button>

                        <button className="BotonBoss">Servicios semanales</button>

                            <button className="BotonBoss">Horario mensual</button>

                                <button className="BotonBoss">Estadisticas </button>
                            </header>

        </div>
   
        </section>
        </>
    );
}

export default InicioBoss;
