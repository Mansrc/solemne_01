import React,{useState} from 'react';
import Calendar from 'react-calendar';
import { Link} from 'react-router-dom';
import Navbar from '../components/NavbarTrabajadores'
import Separacion from '../components/Separacion';

const HomeTrabajador = () => {
  //detecta que fecha se presiona
  const [value, setValue] = useState(new Date());
  let fecha = value;
  let fechita = new Intl.DateTimeFormat("az").format(fecha)
  console.log(fechita)

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

><div id="division-centrado-boton"><button id="envio-id-final" className="gotoRegister guardar">Seleccionar dia</button></div></Link>
    </>
  )
}

export default HomeTrabajador;
