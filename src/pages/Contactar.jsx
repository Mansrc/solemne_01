import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Separacion from "../components/Separacion"
import imagen from "../components/contactar.jpeg"
import Card from "../components/Card";
import FormImput from "../components/FormInput"
import FormTextarea from "../components/FormTextarea"
import Axios from "axios";
import emailjs from 'emailjs-com'
function Contactar(){
    let inicialContacto ={
        name:'',
        email:'',
        phone:'',
        mensaje:'',
     }
    const [contacto, setContacto] = useState(inicialContacto)
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
                  setContacto(inicialContacto)
             })
             .catch((error) => {
                  console.log(error);
             });
             emailjs.sendForm('service_wxxfp5c', 'template_v44j942', e.target,'user_n9jx7Z8r32xQLMk6YhXLc')
             
             .then((result) => {
                 console.log(result);
                 alert(`Felicidades ${contacto.name}, pronto la empresa se contactara contigo`)
                 setContacto(inicialContacto)
             }, (error) => {
                 console.log(error);
                 console.log('error al enviar email')
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
                    <button type="submit" className="boton_ingresar_enviar">enviar</button>
                </div>

            </Card>
            
        </form>
        </>
    );
}

export default Contactar;
