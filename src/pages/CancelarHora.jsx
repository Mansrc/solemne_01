import React from "react";
import Navbar from "../components/Navbar";
import Separacion from "../components/Separacion"
import imagen from "../components/4.jpeg"
import Card from "../components/Card";
import FormImput from "../components/FormInput"
import FormTextarea from "../components/FormTextarea"




function CancelarHora(){
    return(
        <>
        <Navbar />
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Cancelar Hora" id="carta_redondear">
                <FormImput
                label="Correo"
                type="email"
                 />
                 <FormImput
                 label="Codigo de comprobante"
                 type="text"
                 />
                <FormTextarea
                 label="Razon de cancelacion de hora"
                 type ="text"
                />
                <div>
                    <input type="submit" value ="Confirmar" className="boton_ingresar_enviar " />
                </div>

            </Card>
            
        </section>
        </>
    );
}

export default CancelarHora;
