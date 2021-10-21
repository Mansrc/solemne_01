import React from 'react'
import Navbar from '../../components/Navbar';
import Separacion from '../../components/Separacion';
import UseCancelarHora from '../../hooks/UseCancelarHora'
import CancelacionHoraa from '../CancelacionHora/CancelacionHora.css'
const validationsForm=form=>{

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
      <input 
        name="email"
        value={form.email}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder="Ingresar email"
        className="input-cancelar"/>
      <input
        name="code"
        value={form.code}
        onChange={handleChange}
        onSubmit={handleSubmit}
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