import React from "react";
import Navbar from "../components/Navbar";
import Separacion from "../components/Separacion"
import imagen from "../components/4.jpeg"
import Card from "../components/Card";
import FormImput from "../components/FormInput"
import FormTextarea from "../components/FormTextarea"
import {Link} from "react-router-dom"



function IngresoTrabajadores(){
    return(
        <>
        <Navbar />
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Ingreso de Trabajadores" id="carta_redondear">
                <FormImput
                label="Correo"
                type="email"
                 />
                 <FormImput
                 label="contraseña"
                 type="password"
                 />
                <div>
                    
                    <input type="submit" value ="Entrar" className="boton_ingresar_enviar color_boton_input"/>
                </div>
                <div>
                    
                    <Link to="/acerca_de/registrarse"><button  className="boton_ingresar_enviar ">Registrarse</button></Link>
                </div>

            </Card>
            
        </section>
        </>
    );
}

export default IngresoTrabajadores;
