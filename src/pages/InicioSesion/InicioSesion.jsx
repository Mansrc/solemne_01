import React from 'react'
import Navbar from '../../components/Navbar';
import Separacion from '../../components/Separacion';
import inicioSesion from './inicioSesion.css'
import { Link } from 'react-router-dom';
const InicioSesion = () => {
  return ( 
    <>
    <Navbar/>
    <Separacion/>
    <form className="form-login">
      <h1 className="h1-login">Iniciar sesion</h1>
      <label className="label-login"><h2>Correo</h2></label>
      <input
        type="email"
        className="input-login"
        placeholder="Ej: juanPerez@gmail.com"
      />
      <label className="label-login"><h2>Contraseña</h2></label>
      <input
        type="password"
        className="input-login"
        placeholder="Ej: miContraseña123"
      />
      <input className="boton-envio input-login botton"
        id="boton-bajo"
        type="submit"
        value="ingresar"
      />
      <Link  className="gotoRegister" to="/registro/prueba"><button className="gotoRegister">Registrarse</button></Link>  
    </form>
    </>

   );
}
 
export default InicioSesion;