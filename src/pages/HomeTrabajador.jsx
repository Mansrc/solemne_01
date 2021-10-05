import React from 'react'
import Calendar from 'react-calendar';
import Navbar from '../components/Navbar';
import Separacion from '../components/Separacion';

const HomeTrabajador = () => {
  return (
    <>
     <Navbar/>
     <Separacion/>
     <Calendar className="calendario"></Calendar> 
    </>
  )
}

export default HomeTrabajador;
