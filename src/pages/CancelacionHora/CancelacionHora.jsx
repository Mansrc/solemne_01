import React from 'react'
import Navbar from '../../components/Navbar';
import Separacion from '../../components/Separacion';
import UseCancelarHora from '../../hooks/UseCancelarHora'
import CancelacionHoraa from '../CancelacionHora/CancelacionHora.css'
import axios from 'axios';
const validationsForm=form=>{
  let errors = {}
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if(!form.email.trim()){
    errors.email="El campo email es requerido"
  }else{
    if(!regexEmail.test(form.email.trim())){
      errors.email="El campo email no es valido"
    }
  }
  if(!form.code.trim()){
    errors.code="El campo codigo es requerido"
  }
  // else{
  // axios.get('http://localhost:5000/reserva')
  // .then(promises=>{
  //   let user = promises.data
  //   for (let i = 0; i < user.length; i++) {
  //     let usuario = user[i]
  //     let idform = parseInt(form.code)
  //     if(usuario === idform){
  //       errors.code=null
  //       break
  //     }else{
  //       errors.code="este codigo no existe"
  //     }
      
  //   }
  // })
  // .catch(error=>{
  //   console.log(error)
  // })
  // }
  return errors
}
const initialForm={
  email:"",
  code:"",
  descripcionCancelacion:"",
}
const CancelacionHora = () => {
  const{ 
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
    } = UseCancelarHora(initialForm,validationsForm)
  return ( 
    <>
    <Navbar/>
    <Separacion/>
    <form className="form-cancelar" onSubmit={handleSubmit}>
      <header>
        <h1 className="titulo-cancelar">Cancelar Hora</h1>
      </header>
      {errors.email?<p className="p-error">{errors.email}</p>:null}
      <input 
      type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Ingresar email"
        className="input-cancelar"/>
          {errors.code?<p className="p-error">{errors.code}</p>:null}
      <input
        name="code"
        value={form.code}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Ingresar codigo de cancelacion de hora"
        className="input-cancelar"/>
      <textarea
        name="descripcionCancelacion"
        value={form.descripcionCancelacion}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder="por que cancelas la hora? explicanos aqui "
        name="descripcionCancelacion" id="text-area-cancel" cols="30" rows="10"></textarea>
      <input className="input-cancelar" id="boton-cancelar" type="submit" value="Cancelar Hora"/>
    </form>
    </>
   );
}
 
export default CancelacionHora;