import React,{useState} from 'react';
import Calendar from 'react-calendar';
import { Link} from 'react-router-dom';
import Navbar from '../components/NavbarTrabajadores'
import Separacion from '../components/Separacion';
import Verificacion from './Verificacion';

const HomeTrabajador = () => {
  //detecta que fecha se presiona
  const [value, setValue] = useState(new Date());
  let fecha = value;
  let fechita = new Intl.DateTimeFormat("az").format(fecha)
  console.log(fechita)
  function pasarFecha(){
    return(
    <Verificacion propiedad={fechita}/>)
  }

  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <>
     <Navbar/>
     <Separacion/>
     <Calendar className="calendario"
      name="fecha"
      onChange = { onChange }  
      /> 
      <Link
  to={{
    pathname: "/acerca_de/ingresar/horario/confirmacion",
    state: fechita // your data array of objects
  }}
><button className="gotoRegister guardar" onClick={pasarFecha}>Seleccionar dia</button></Link>
    </>
  )
}

export default HomeTrabajador;
