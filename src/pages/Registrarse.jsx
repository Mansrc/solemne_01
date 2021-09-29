import React,{useState} from "react"
import Navbar from "../components/Navbar"
import imagen from "../components/4.jpeg"
import Card from"../components/Card"
import FormImput from "../components/FormInput"
import Separacion from "../components/Separacion"
import {Button, Modal} from "@material-ui/core"


function Registrarse(){
    const [modal, setModal] = useState(false)
    const body = (
        <Card title="Felicidades, haz sido registrado">
        <Button variant="contained" onClick={()=>abrirCerrarModal()}>OK</Button>
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
                 label="Correo Electronico"
                 type="email"
                 />
                 <FormImput
                 label="Numero telefono"
                 type="email"
                 />
                 <FormImput
                 label="Direccion"
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
                 label="Codigo del trabajador"
                 type="password"
                 />

                
                <div>
                    
                    <Button type="submit" className="boton_ingresar_enviar" color = "yellow" onClick={()=>abrirCerrarModal()}
                    variant="contained">Registrarse</Button>
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