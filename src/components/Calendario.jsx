import React from 'react'
import Navbar from './Navbar';
import Separacion from './Separacion';
const Calendario = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = mm + '/' + dd + '/' + yyyy;


  return (
    <>
      <Navbar/>
      <Separacion/>
      <p style={{margin:500}}>{today}</p>
    </>
  )
}
export default Calendario;