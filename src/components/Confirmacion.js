import React, { useEffect,useState} from "react"
import axios from "axios"


const Confirmacion = ()=>{
 const [data, setData] = useState([])
 console.log(data)
 console.log(data.hora)
   useEffect(() => {const url="http://192.168.1.86:3000/datos"
   axios.get(url,{})
  .then(Request=>{
      let datos=Request.data
      setData(datos) 
  })
  .catch(error=>{
      console.log(error)
  })}, [])
  
    return(
    <tr>{data.length > 0 ? (
        data.map(e=>{return(
        <tr>
    <td>{e.hora}</td><td><button id="realizado">Realizado</button></td><td><button id="norealizado">X</button></td><td>{e.phone}</td><td>{e.direccion}</td>
    </tr>)})): (<tr>No hay horas guardadas</tr>)}
</tr>
    )
}
export default Confirmacion