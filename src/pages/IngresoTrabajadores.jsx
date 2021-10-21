import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Separacion from "../components/Separacion"
import imagen from "../components/4.jpeg"
import Card from "../components/Card";
import FormInput from "../components/FormInput"
import {Link} from "react-router-dom"
import uuid from 'uuid/dist/v4'


function IngresoTrabajadores(){
     //Crear State de Registro
     const [ingreso, actualizarIngreso]= useState({
        correo:'',
        contraseña:'',
})
    const [error , actualizarerror] = useState(false)
    //Funcion que se ejecuta cada que el usuario escribe en un input
   const actualizarState = e =>{
       actualizarIngreso({
           ...ingreso,
           [e.target.name]:e.target.value
       })
       if(ingreso.correo.length<5){
           console.log("error")
       }
   }

   // Extrar los valores
   const {correo,contraseña} = ingreso;

   const submitIngreso = e => {
    e.preventDefault();
    if(correo.trim() === ''|| contraseña.trim() === ''){
        actualizarerror(true);
        return;
      }
   //asignar un ID
   actualizarerror(false)
   ingreso.id= uuid();
 
}  
    return(
        <>
        <Navbar />
        <Separacion/>
        <section id="contenedor_contacto">
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Ingreso de Trabajadores" id="carta_redondear">
                <form onSubmit={submitIngreso}>
                <FormInput
                label="Correo"
                type="email"
                onChange ={actualizarState}
                value={correo}
                name="correo"
                 />
                 <FormInput
                 label="Contraseña"
                 type="password"
                 onChange={actualizarState}
                 value={contraseña}
                 name="contraseña"
                 />
                <div>
                  {error ? <p className='alerta-error'>Recuerde ingresar correo y contraseña</p> :null}
                   <Link to= "/acerca_de/ingresar/horario"><button type="submit" className="boton_ingresar_enviar color_boton_input">Entrar</button></Link> 
                </div>
                </form>
                <div>
                    
                    <Link to="/acerca_de/registrarse"><button  className="boton_ingresar_enviar ">Registrarse</button></Link>
                </div>

            </Card>
            
        </section>
        </>
    );
}

export default IngresoTrabajadores;
