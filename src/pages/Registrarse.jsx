import React,{useState} from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormImput from "../components/FormInput"
import Separacion from "../components/Separacion"
import {Modal} from "@material-ui/core"


function Registrarse(){
    const [modal, setModal] = useState(false)
    const body = (
        <Card title="Felicidades, has sido registrado">
        <button className="boton_ingresar_enviar color_boton_input" onClick={()=>abrirCerrarModal()}>OK</button>
        </Card>
    )
    const abrirCerrarModal= () => {
        setModal(!modal)
    }
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
                 label="Correo Electrónico"
                 type="email"
                 />
                 <FormImput
                 label="Número Teléfono"
                 type="email"
                 />
                 <FormImput
                 label="Dirección"
                 type="email"
                 />
                 <FormImput
                 label="Contraseña"
                 type="password"
                 />
                 <FormImput
                 label="Confirmar contraseña"
                 type="password"
                 />
                 <FormImput
                 label="Código del trabajador"
                 type="password"
                 />

                
                <div>
                    
                    <button type="submit" className="boton_ingresar_enviar color_boton_input" onClick={()=>abrirCerrarModal()}>Registrarse</button>
                    <Modal
                    open={modal}
                    onClose={abrirCerrarModal}
                    >{body}</Modal>
                </div>

            </Card>
            
        </section>
        </>
    );
}


export default Registrarse;