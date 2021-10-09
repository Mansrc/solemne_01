import React,{useState} from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormInput from "../components/FormInput"
import Separacion from "../components/Separacion"
import {Modal} from "@material-ui/core"
import uuid from 'uuid/dist/v4'

const Registrarse = () => {
    const [modal, setModal] = useState(false)
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
        const [error , actualizarerror] = useState(false)
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
             actualizarerror(true);
             return;
           }
           if(telefono.length < 9 || telefono.length > 12){
            actualizarerror(true);
            return;
          }
          if(contraseña.length < 4){
            actualizarerror(true);
            return;
          }
           //asignar un ID
           registro.id= uuid();
           //Crear la cita
          crearRegistro(registro)
           //Reiniciar el form
           actualizarerror(false)
           actualizarRegistro({
            nombre:'',
            correo:'',
            telefono:'',
            contraseña:'',
            codigo:''
           })
           //ventana emergente
           setModal(!modal)
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
                 />
                 <FormInput
                 label="Correo Electrónico"
                 type="email"
                 onChange={actualizarState}
                 value={correo}
                 name="correo"
                 />
                 <FormInput
                 label="Número Teléfono"
                 type="number"
                 onChange={actualizarState}
                 value={telefono}
                 name="telefono"
                 onWheelCapture={e => { e.target.blur() }}
                 />
              
                 <FormInput
                 label="Contraseña"
                 type="password"
                 onChange={actualizarState}
                 value={contraseña}
                 name="contraseña"
                 />
                 <FormInput
                 label="Código del trabajador"
                 type="password"
                 onChange={actualizarState}
                 value={codigo}
                 name="codigo"
                 />

                {error ? <p className='alerta-error'>hola</p> :null}
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