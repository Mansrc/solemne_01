import React from "react";
import Navbar from "../components/Navbar";
import Separacion from "../components/Separacion"
import imagen from "../components/contactar.jpeg"
import Card from "../components/Card";
import FormImput from "../components/FormInput"
import FormTextarea from "../components/FormTextarea"




function Contactar(){
    return(
        <>
        <Navbar />
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Contactanos" >
                <FormImput
                placeholder="  Nombre"
                type="text"
                 />
                 <FormImput
                 placeholder="  Correo electronico"
                 type="email"
                 />
                <FormImput
                placeholder="  Telefono"
                type="text"
                />
                <FormTextarea
                 placeholder="  Mensaje"
                 type ="text"
                />
                <div>
                    
                    <input type="submit" value ="enviar" className="boton_ingresar_enviar"/>
                </div>

            </Card>
            
        </section>
        </>
    );
}

export default Contactar;
