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
    
const opcionesVehiculo=[
    {value:"1", label:"Chevrolet"},
    {value:"2", label:"Ford"},
    {value:"3" ,label:"Hyundai"},
    {value:"4" ,label:"Kia"},
    {value:"5" ,label:"MG"},
    {value:"6" ,label:"Mazda"},
    {value:"7" ,label:"Nissan"},
    {value:"8" ,label:"Peugeot"},
    {value:"9" ,label:"Suzuki"},
    {value:"10" ,label:"Toyota"},

]
const opciones2=[
    {value:"2000", label:"2000"},
    {value:"2001", label:"2001"},
    {value:"2002" ,label:"2002"},
    {value:"2003", label:"2003"},
    {value:"2004", label:"2004"},
    {value:"2005" ,label:"2005"},
    {value:"2006", label:"2006"},
    {value:"2007", label:"2007"},
    {value:"2008" ,label:"2008"},
    {value:"2009", label:"2009"},
    {value:"2010", label:"2010"},
    {value:"2011" ,label:"2011"},
    {value:"2012", label:"2012"},
    {value:"2013", label:"2013"},
    {value:"2014" ,label:"2014"},
    {value:"2015", label:"2015"},
    {value:"2016", label:"2016"},
    {value:"2017" ,label:"2017"},
    {value:"2018", label:"2018"},
    {value:"2019", label:"2019"},
    {value:"2020" ,label:"2020"},
    {value:"2021", label:"2021"}
]
function ReservarHora(){
    return(
        <>
        <Navbar/>
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Datos de Usuario">
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
                 <h1 className="titulo">datos del vehiculo</h1>
                 <FormSelect options={opcionesVehiculo} label="Marca del Vehiculo"/>
                  <FormSelect options={opciones2} label="Año"/>
                 <FormImput
                 placeholder="Modelo del Vehiculo"
                 type="text"
                 />
                 <FormTextarea placeholder="Descripcion del problema" type="text"/>
                <div>
                    <Link to="/servicios/scannerGold/calendario/reserva"><input type="submit" value ="Reservar" className="boton_ingresar_enviar color_boton_input"/></Link>
                    
                </div>

            </Card>
            
        </section>
        </>
    );
}


export default ReservarHora;