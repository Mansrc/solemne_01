import React,{useState} from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormInput from "../components/FormInput"
import Separacion from "../components/Separacion"
import {Modal} from "@material-ui/core"
import uuid from 'uuid/dist/v4'
import axios from "axios"

const Registrarse = () => {
    const url='http://localhost:3001/users'
    const [modal, setModal] = useState(false)
    const [mensaje, setMensaje] = useState({
        general:"Porfavor rellene todos los campos",
        nombre:'',
        correo:'Este correo ya se encuentra registrado',
        telefono:'Porfavor ingrese un telefono de 9 o mas numeros',
        contraseña:'Porfavor ingrese una contraseña de mas de 4 caracteres',
        codigo:''
    })
    const body = (
        <Card title="Felicidades, has sido registrado">
        <button className="boton_ingresar_enviar color_boton_input" onClick={()=>setModal(!modal)}>OK</button>
        </Card>
    )
        //Crear State de Registro
    const [registro, actualizarRegistro]= useState({
            nombre:'',
            correo:'',
            telefono:'',
            contraseña:'',
            codigo:''
    })
        const [error , actualizarerror] = useState({
            general:false,
            nombre:false,
            correo:false,
            telefono:false,
            contraseña:false,
            codigo:false
           })
        //Funcion que se ejecuta cada que el usuario escribe en un input
       const actualizarState = e =>{
           actualizarRegistro({
               ...registro,
               [e.target.name]:e.target.value
           })
       }
    
       // Extrar los valores
       const {nombre,correo,telefono,contraseña,codigo} = registro;

       const [registros, guardarRegistros]= useState([])
           const crearRegistro = registro => {
            guardarRegistros([
              ...registros,
              registro
            ])  
          }
          
       //cuando el usuario presiona registrarse
       const submitRegistro = e => {
           e.preventDefault();
           //validar
           if(nombre.trim() === '' || correo.trim() === ''|| telefono.trim() === ''|| contraseña.trim() === '' || codigo.trim() === ''){
            error.general = true
            actualizarerror(error)
             console.log(error.general)
             console.log(mensaje.general)
             return;
           }    
           if(telefono.length < 9 || telefono.length > 12){
            error.telefono=true
            return;
          }
          if(contraseña.length < 4){
            error.contraseña=true
            return;
          }
           //asignar un ID
           registro.id= uuid();
           //Crear el registro
          crearRegistro(registro)
          //se  sube el registo
          axios.post(url, {
            registro
       })
       .then(function (response) {
        console.log(response);
       })
      .catch(function (error) {
        console.log(error);
       });
           //Reiniciar el form
           actualizarerror({
            general:false,
            nombre:false,
            correo:false,
            telefono:false,
            contraseña:false,
            codigo:false
           })
           actualizarRegistro({
            nombre:'',
            correo:'',
            telefono:'',
            contraseña:'',
            codigo:''
           })
           //ventana emergente
           setModal(!modal)
           console.log(registro)
       } 

        
    return(
        <>
        <Navbar/>
        <Separacion/>
        <section id="contenedor_contacto">
            <img src={imagen} id="imagen_contacto" />
            <Card title="Registrarse" id="carta_redondear">
           
                <form onSubmit={submitRegistro}>
                <FormInput
                label="Nombre Completo"
                type="text"
                onChange={actualizarState}
                value={nombre}
                name="nombre"
                placeholder="escriba su nombre aqui"
                 />
                {error.nombre ? <p className='alerta-error'>{mensaje.nombre}</p> : null}
                 <FormInput
                 label="Correo Electrónico"
                 type="email"
                 onChange={actualizarState}
                 value={correo}
                 name="correo"
                 />
                 {error.correo? <p className='alerta-error'>{mensaje.correo}</p> : null}
                 <FormInput
                 label="Número Teléfono"
                 type="number"
                 onChange={actualizarState}
                 value={telefono}
                 name="telefono"
                 onWheelCapture={e => { e.target.blur() }}
                 />
                 {error.telefono ? <p className='alerta-error'>{mensaje.telefono}</p> : null}
                 <FormInput
                 label="Contraseña"
                 type="password"
                 onChange={actualizarState}
                 value={contraseña}
                 name="contraseña"
                 />
                {error.contraseña ? <p className='alerta-error'>{mensaje.contraseña}</p> : null}
                 <FormInput
                 label="Código del trabajador"
                 type="password"
                 onChange={actualizarState}
                 value={codigo}
                 name="codigo"
                 />
                {error.codigo ? <p className='alerta-error'>{mensaje.codigo}</p> : null}
                {error.general ? <p className='alerta-error'>{mensaje.general}</p> : null}
                <div>
                    
                    <button type="submit" className="boton_ingresar_enviar color_boton_input">Registrarse</button>
                    <Modal
                    open={modal}
                    >{body}</Modal>
                </div>
            </form>
            </Card>
            
        </section>
        </>
    );
}


export default Registrarse