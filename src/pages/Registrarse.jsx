import React from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormImput from "../components/FormInput"
import Separacion from "../components/Separacion"


function Registrarse(){
    return(
        <>
        <Navbar/>
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Registrarse" id="carta_redondear">
                <FormImput
                label="Nombre Completo"
                type="text"
                 />
                 <FormImput
                 label="Correo Electronico"
                 type="email"
                 />
                 <FormImput
                 label="numero telefono"
                 type="email"
                 />
                 <FormImput
                 label="direccion"
                 type="email"
                 />
                 <FormImput
                 label="contraseña"
                 type="password"
                 />
                 <FormImput
                 label="confirmar contraseña"
                 type="password"
                 />
                 <FormImput
                 label="codigo del trabajador"
                 type="password"
                 />

                
                <div>
                    
                    <input type="submit" value ="registrarse" className="boton_ingresar_enviar color_boton_input"/>
                </div>

            </Card>
            
        </section>
        </>
    );
}


export default Registrarse;