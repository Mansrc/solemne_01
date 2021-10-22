import React, { useEffect,useState} from "react"
import axios from "axios"


const Confirmacion = ()=>{
 let fecha = '2021-10-21'
 const [data, setData] = useState([])
   useEffect(() => {const url="http://192.168.1.86:3000/datos"
   axios.get(url,{})
  .then(Request=>{
      let datos=Request.data
      setData(datos) 
  })
  .catch(error=>{
      console.log(error)
  })}, [])
  let datosfiltrados = data.filter(e=>e.fecha === fecha)
  let datosordenados = datosfiltrados.sort((a, b) => (a.hora > b.hora ? 1 : a.hora < b.hora ? -1 : 0))
  console.log(datosordenados)
    return(
    <tr>{datosordenados.length > 0 ? (    
        datosordenados.map(e=>{return(
        <tr>
    <td>{e.hora}</td><td><button id="realizado">Realizado</button></td><td><button id="norealizado">X</button></td><td>{e.phone}</td><td>{e.direccion}</td>
    </tr>)})): (<tr>No hay horas guardadas</tr>)}
</tr>
    )
}
export default Confirmacion