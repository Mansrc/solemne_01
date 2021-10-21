//json-server --watch peliculas.json
import React from 'react'
import Navbar from '../../components/Navbar';
import Separacion from '../../components/Separacion';
import inicioSesion from './inicioSesion.css'
import { Link,Redirect } from 'react-router-dom';
import UseLogin from '../../hooks/UseLogin'
const initialForm = {
  email:"",
  password:"",
}
const validationsForm = (form)=>{
  let errors = {}
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regularPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if(!form.email.trim()){
    errors.email="El campo email es requerido"
  }else{
    if(!regexEmail.test(form.email.trim())){
      errors.email="El campo email no es valido"
    }
  }
  if(!form.password.trim()){
    errors.password="El campo password es requerido"
  }else{
    if(!regularPass.test(form.password.trim())){
      errors.password="debe tener entre 6 y 16 caracteres,minimo 1 numero y un caracter especial"
    }
  }
  return errors;
}
const InicioSesion = () => {
  const{ 
    form,
    errors,
    loading,
    response,
    encontrado,
    handleChange,
    handleBlur,
    handleSubmit
    } = UseLogin(initialForm,validationsForm)
  return ( 
    <>
    <Navbar/>
    <Separacion/>
    <form className="form-login" onSubmit={handleSubmit}>
      <h1 className="h1-login">Iniciar sesion</h1>
      <label className="label-login"><h2>Correo</h2></label>
      {errors.email?<p className="error">{errors.email}</p>:null}
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        className="input-login"
        placeholder="Ej: juanPerez@gmail.com"
      />
      <label className="label-login"><h2>Contraseña</h2></label>
      {errors.password?<p className="error">{errors.password}</p>:null}
      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        className="input-login"
        placeholder="Ej: miContraseña123"
      />
      {encontrado?null:<p className="error">usuario no existe o contraseña incorrecta</p>}
      {loading&&<Redirect to="ingresar/horario"/>}
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