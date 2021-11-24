import React,{useEffect, useState} from 'react'
import Navbar from '../../components/Navbar';
import style from './registro.css'
import Separacion from '../../components/Separacion';
import UseForm from '../../hooks/UseForm';
import axios from 'axios';
const initialForm = {
  name:"",
  email:"",
  phone:"",
  password:"",
  passwordconfirm:"",
  code:""
}



const validationsForm = (form,codigoError)=>{
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regularPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!form.name.trim()){
    errors.name="El campo nombre es requerido"
  }else{
    if(!regexName.test(form.name.trim())){
      errors.name="El campo nombre solo acepta caracteres y espacios en blanco"
    }
  }
  if(!form.email.trim()){
    errors.email="El campo email es requerido"
  }else{
    if(!regexEmail.test(form.email.trim())){
      errors.email="El campo email no es valido"
    }
  }
  if(!form.phone.trim()){
    errors.phone="El campo telefono es requerido"
  }else{
    if(form.phone.length > 12){
      errors.phone="colocar un numero de telefono valido"
    }
  }
  if(!form.password.trim()){
    errors.password="El campo password es requerido"
  }else{
    if(!regularPass.test(form.password.trim())){
      errors.password="el campo debe tener minimo 6 y maximo 16 caracteres y un caracter especial"
    }
  }
  if(!form.passwordconfirm.trim()){
    errors.passwordconfirm="El campo password es requerido"
  }else{
    if(form.password.trim() !== form.passwordconfirm.trim()){
      errors.passwordconfirm="Las contraseñas deben ser iguales"
    }
  }
  if(!form.code.trim()){
    errors.code="El campo codigo de trabajador es requerido"
  }else{
    if(codigoError){
      errors.code="codigo no encontrado en la base de datos"
    }
  }
  return errors
}

const RegistroPrueba = () => {
  const{ 
    form,
    errors,
    loading,
    response,
    codigoError,
    handleChange,
    handleBlur,
    handleSubmit
    } = UseForm(initialForm,validationsForm)
  return ( 
    <>
    <Navbar/>
    <Separacion/>
    <h1 className="h1-register">Registro de trabajadores</h1>
    <form className="form-register" onSubmit={handleSubmit}>
      <label className="label-register"><h2>Nombre del trabajador</h2></label>
      <input
        className="input-register"
        type="text"
        name="name"
        value={form.name}
        required
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="EJ: Guillermo Gonzalez"
      />
      {errors.name?<p className="error">{errors.name}</p>:null}
      <label className="label-register"><h2>Email</h2></label>
      <input
        className="input-register"
        type="email"
        name="email"
        value={form.email}
        required
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="EJ: LucasPerez@gmail.com"
      />
      {errors.email?<p className="error">{errors.email}</p>:null}
      <label className="label-register"><h2>Numero telefonico</h2></label>
      <input
      className="input-register"
        type="number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="EJ: +56984563214"
      />
      {errors.phone?<p className="error">{errors.phone}</p>:null}
      <label className="label-register"><h2>Contraseña</h2></label>
      <input
        className="input-register"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="EJ: micontraseñafavorita234"
      />
      {errors.password?<p className="error">{errors.password}</p>:null}
      <label className="label-register"><h2>Confirmar contraseña</h2></label>
      <input
        className="input-register"
        type="password"
        name="passwordconfirm"
        value={form.passwordconfirm}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="EJ: micontraseñafavorita234"
      />
      {errors.passwordconfirm?<p className="error">{errors.passwordconfirm}</p>:null}
      <label className="label-register"><h2>Codigo del trabajador</h2></label>
      <input
        className="input-register"
        type="password"
        name="code"
        value={form.code}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="codigo de trabajador"
      />
      {errors.code?<p className="error">{errors.code}</p>:null}
      {response?alert(`Felicidades ${form.name}, tu cuenta ha sido registrada`):null}
      <input
      className="boton-envio input-register"
      type="submit"
      value="enviar"
      />
      
    </form>
    </>

   );
}
 
export default RegistroPrueba;