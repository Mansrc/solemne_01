import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Separacion from "../components/Separacion"
import imagen from "../components/contactar.jpeg"
import Card from "../components/Card";
import FormImput from "../components/FormInput"
import FormTextarea from "../components/FormTextarea"
import Axios from "axios";
function Contactar(){
    const [contacto, setContacto] = useState({
        name:'',
        email:'',
        phone:'',
        mensaje:'',
     })
    const handleChange =(e)=>{
        setContacto({
            ...contacto,
            [e.target.name]:e.target.value
        })
        console.log(contacto)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(contacto.name != ""&&contacto.email!=''&&contacto.phone!=''&&contacto.mensaje!=''){
            Axios({
                data:contacto,
                method:'post',
                url: "http://127.0.0.1:8000/contact",
              })
            .then((response) => {
                  console.log(response.data)
                  
             })
             .catch((error) => {
                  console.log(error);
             });
        }
    }

    return(
        <>
        <Navbar />
        <Separacion/>
        <form id="contenedor_contacto" onSubmit={handleSubmit}>
            
            <img src={imagen} id="imagen_contacto" />
            <Card title="Contactanos" >
                <FormImput
                     required
                    onChange={handleChange}
                    value={contacto.name}
                    name='name'
                    placeholder="  Nombre"
                    type="text"
                 />
                 <FormImput
                    onChange={handleChange}
                    value={contacto.email}
                     name='email'
                    placeholder="  Correo electronico"
                    type="email"
                 />
                <FormImput
                    onChange={handleChange}
                    value={contacto.phone}
                    name='phone'
                    placeholder="  Telefono"
                    type="number"
                />
                <textarea
                    onChange={handleChange}
                    value={contacto.mensaje}
                    name='mensaje'
                    placeholder="  Mensaje"
                    type ="text"
                    id="t-a-reserva"
                    placeholder="Mensaje" 
                    cols="4"  
                    rows="5"
                    className="textArea"
                ></textarea>
                <div>
                    
                    <input type="submit" value ="enviar" className="boton_ingresar_enviar"/>
                </div>

            </Card>
            
        </form>
        </>
    );
}

export default Contactar;
