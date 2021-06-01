import React from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormImput from "../components/FormInput"
import Separacion from "../components/Separacion"
import FormInputInline from "../components/FormInputInline"

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
                <FormInputInline className="inputsinline"
                label="numero telefono"
                type="text"
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