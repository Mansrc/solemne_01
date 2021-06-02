import React from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormImput from "../components/FormInput"
import Separacion from "../components/Separacion"
import FormTextarea from "../components/FormTextarea"
import FormSelect from "../components/FormSelect"
import {Link} from "react-router-dom"
const opciones=[
    {value:"1", label:"Lo Barnechea"},
    {value:"2", label:"Las Condes"},
    {value:"3" ,label:"Vitacura"}
]
    
function ReservarHora(){
    return(
        <>
        <Navbar/>
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Datos de Usuario" id="carta_redondear">
                <FormImput
                placeholder="Correo Electronico"
                type="mail"
                 />
                 <FormImput
                 placeholder="Nombre Completo"
                 type="text"
                 />
                  <FormSelect options={opciones} label="Comunas"/>
                 <FormImput
                 placeholder="Direccion"
                 type="text"
                 />
                 <FormTextarea placeholder="Comentarios" type="text"/>
                <div>
                    <Link to="/servicios/scannerGold/vehiculo"><input type="submit" value ="Siguiente" className="boton_ingresar_enviar color_boton_input"/></Link>
                    
                </div>

            </Card>
            
        </section>
        </>
    );
}


export default ReservarHora;