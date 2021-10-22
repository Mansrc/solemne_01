import React,{useState} from 'react';
import Calendar from 'react-calendar';
import Navbar from '../components/NavbarTrabajadores'
import Separacion from '../components/Separacion';

const HomeTrabajador = () => {
  //detecta que fecha se presiona
  const [value, setValue] = useState(new Date());
  let fecha = value;
  let fechita = new Intl.DateTimeFormat("az").format(fecha)

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
      value = {fecha} 
      /> 
    </>
  )
}

export default HomeTrabajador;
