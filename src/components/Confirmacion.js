import React, { useEffect } from "react"
import axios from "axios"


const Confirmacion = ()=>{
 
   useEffect(() => {const url="http://localhost:5000/datos"
   axios.get(url,{})
  .then(Request=>{
      let datos=Request.data
      datos.map(e=>{
          console.log(e.direccion)
      })
      
  })
  .catch(error=>{
      console.log(error)
  })}, [])
    return(
    <tr>
    <td>08:00AM</td><td><button id="realizado">Realizado</button></td><td><button id="norealizado">X</button></td><td>+569</td><td>Calle falsa 123</td>
</tr>
    )
}
export default Confirmacion