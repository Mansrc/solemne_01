import React from 'react'
import Navbar from '../../components/Navbar'
import Separacion from '../../components/Separacion';
import ReservaHoraa from '../ReservaHora/ReservaHora.css'
import axios from 'axios';
import UseReservation from '../../hooks/UseReservation'

const opciones=[
  {value:"lo barnechea", label:"Lo Barnechea"},
  {value:"las Condes", label:"Las Condes"},
  {value:"Vitacura" ,label:"Vitacura"}
]
  
const opcionesVehiculo=[
  {value:"Chevrolet", label:"Chevrolet"},
  {value:"Ford", label:"Ford"},
  {value:"Hyundai" ,label:"Hyundai"},
  {value:"Kia" ,label:"Kia"},
  {value:"MG" ,label:"MG"},
  {value:"Mazda" ,label:"Mazda"},
  {value:"Nissan" ,label:"Nissan"},
  {value:"Peugeot" ,label:"Peugeot"},
  {value:"Suzuki" ,label:"Suzuki"},
  {value:"Toyota" ,label:"Toyota"},

]
const opciones2=[
  {value:"2000", label:"2000"},
  {value:"2001", label:"2001"},
  {value:"2002" ,label:"2002"},
  {value:"2003", label:"2003"},
  {value:"2004", label:"2004"},
  {value:"2005" ,label:"2005"},
  {value:"2006", label:"2006"},
  {value:"2007", label:"2007"},
  {value:"2008" ,label:"2008"},
  {value:"2009", label:"2009"},
  {value:"2010", label:"2010"},
  {value:"2011" ,label:"2011"},
  {value:"2012", label:"2012"},
  {value:"2013", label:"2013"},
  {value:"2014" ,label:"2014"},
  {value:"2015", label:"2015"},
  {value:"2016", label:"2016"},
  {value:"2017" ,label:"2017"},
  {value:"2018", label:"2018"},
  {value:"2019", label:"2019"},
  {value:"2020" ,label:"2020"},
  {value:"2021", label:"2021"}
]
const horas=[
  {value:"09:00", label:"09:00"},
  {value:"09:30", label:"09:30"},
  {value:"10:00" ,label:"10:00"},
  {value:"10:30", label:"10:30"},
  {value:"11:00", label:"11:00"},
  {value:"11:30" ,label:"11:30"},
  {value:"12:00", label:"12:00"},
  {value:"12:30", label:"12:30"},
  {value:"13:00" ,label:"13:00"},
  {value:"14:00", label:"14:00"},
  {value:"14:30", label:"14:30"},
  {value:"15:00" ,label:"15:00"},
  {value:"15:30", label:"15:30"},
  {value:"16:00", label:"16:00"},
  {value:"16:30" ,label:"16:30"},
  {value:"17:00", label:"17:00"},
  {value:"17:30", label:"17:30"},
  {value:"18:00" ,label:"18:00"},
  {value:"18:30", label:"18:30"},
  {value:"19:00", label:"19:00"},
  {value:"19:30" ,label:"19:30"},
  {value:"20:00", label:"20:00"}
]
const initialForm = {
  email:"",
  name:"",
  comuna:"comunas",
  direccion:"",
  phone:"",
  marca:"marca",
  año:"año",
  modelo:"",
  problema:"",
  fecha:"",
  hora:"hora",
}
const validationsForm = (form) =>{
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let f = new Date();
  let fecha =  f.getFullYear() + "/" + (f.getMonth() +1) + "/" + f.getDate();
  let fechainicial=parseInt(fecha.replace('/','').replace('/',''))
  let fechaFinal=parseInt(form.fecha.replace('-','').replace('-',''))
  var hoy = new Date();
  let hora = hoy.getHours() + ':' + hoy.getMinutes()
  let horaactual = parseInt(hora.replace(':',''))
  let formHora = parseInt(form.hora.replace(':',''))
  if (!form.name.trim()){
    errors.name=`El campo nombre es requerido`
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
    if(form.phone.length > 11){
      errors.phone="colocar un numero de telefono valido"
    }
  }
  if (!form.direccion.trim()){
    errors.direccion="El campo direccion es requerido"
  }
  if (form.comuna ==="comunas" || !form.comuna.trim()){
    errors.comuna="El campo comuna es requerido"
  }
  if (form.marca==="marca" || !form.marca.trim()){
    errors.marca="El campo marca es requerido"
  }
  if (form.año === "año" || !form.año.trim()){
    errors.año="El campo año es requerido"
  }
  if (!form.modelo.trim()){
    errors.modelo="El campo modelo es requerido"
  }
  if (!form.problema.trim()){
    errors.problema="El campo descripcion de problema es requerido"
  }
  if (!form.fecha.trim()){
    errors.fecha="El campo fecha es requerido"
  }else{
    if(fechaFinal<fechainicial ){
      errors.fecha=`fecha incorrecta, la fecha debe ser igual o superior a ${fecha}`
    }
  }
  if (!form.hora.trim()){
    errors.hora="El campo hora es requerido"
  }else{
    if(formHora<horaactual && fechaFinal===fechainicial){
      errors.hora=`hora no valida, la hora debe ser superior a ${hora}`
    }
  }



  return errors
}

const ReservaHora = () => {
  const{ 
    form,
    errors,
    loading,
    response,
    errorhora,
    handleChange,
    handleBlur,
    handleSubmit
    } = UseReservation(initialForm,validationsForm)
  return (  
    <>
      <Navbar/>
      <Separacion/>
      <form className="form-reserva" onSubmit={handleSubmit}>
        
        <header>
          <h2>Ingrese sus datos</h2>
        </header>
        {errors.email?<p className="p-error">{errors.email}</p>:null}
        <input 
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input-reserva"
          placeholder="Correo electronico"
        /> 
        
        {errors.name?<p className="p-error">{errors.name}</p>:null}
        <input
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input-reserva"
          placeholder="Ingrese su nombre"
        />
        {errors.comuna?<p className="p-error">{errors.comuna}</p>:null}
        <select className="select-reserva"
          
          name="comuna"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option disabled selected>comunas</option> 
          {opciones.map((e)=>(
            <option  value={e.value}>{e.label}</option>
          ))}
        </select>
        {errors.direccion?<p className="p-error">{errors.direccion}</p>:null}
        <input
            required
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-reserva"
            placeholder="Ingrese su direccion"
        />
        {errors.phone?<p className="p-error">{errors.phone}</p>:null}
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-reserva"
            placeholder="Ingrese su numero telefonico"
        />
        <header>
          <h2>Datos del vehiculo</h2>
        </header> 
        {errors.marca?<p className="p-error">{errors.marca}</p>:null}
        <select className="select-reserva" name="marca" onBlur={handleBlur} onChange={handleChange}>
          <option disabled selected>marca</option> 
          {opcionesVehiculo.map((e)=>(
            <option value={e.value}>{e.label}</option>
          ))}
        </select>
        {errors.año?<p className="p-error">{errors.año}</p>:null}
        <select className="select-reserva" name="año" onBlur={handleBlur} onChange={handleChange}>
          <option disabled selected>año</option> 
          {opciones2.map((e)=>(
            <option value={e.value}>{e.label}</option>
          ))}
        </select>
        {errors.modelo?<p className="p-error">{errors.modelo}</p>:null}
        <input
           type="text"
           name="modelo"
           value={form.modelo}
           onChange={handleChange}
           onBlur={handleBlur}
           className="input-reserva"
           placeholder="ingresar modelo"
        />
        {errors.problema?<p className="p-error">{errors.problema}</p>:null}
        <textarea
          name="problema"
          value={form.problema}
          onChange={handleChange}
          onBlur={handleBlur}
          id="t-a-reserva"
          placeholder="Ingresar descripcion del problema" 
          cols="4"  
          rows="5"
        ></textarea>
        <header>
          <h2>Fecha de reserva</h2>
        </header>
        {errors.fecha?<p className="p-error">{errors.fecha}</p>:null}
        <input
           name="fecha"
           value={form.fecha}
           onBlur={handleBlur}
           onChange={handleChange}
           className="input-reserva"
           placeholder="Escoger Fecha"
           type="date"
        />
        {errors.hora?<p className="p-error">{errors.hora}</p>:null}
        <select className="select-reserva" name="hora" onBlur={handleBlur} onChange={handleChange}>
          <option disabled selected>hora</option> 
          {horas.map((e)=>(
            <option value={e.value}>{e.label}</option>
          ))}
        </select>
        {errorhora?<p className="p-error">Esta hora ya esta asignada, por facor tome otra </p>:null}
        <input id="boton-reserva" type="submit" value="Reservar"/>
      </form>
    </>
  );
}
 
export default ReservaHora;