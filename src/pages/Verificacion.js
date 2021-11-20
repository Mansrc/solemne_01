import React from "react"
import Confirmacion from "../components/Confirmacion"
import NavbarTrabajadores from "../components/NavbarTrabajadores"
import Separacion from "../components/Separacion"
import { useLocation } from 'react-router-dom'

const Verificacion = ()=>{
    const location = useLocation()
    const fechita = location.state  
    console.log(fechita)
    
return(
<div>
<NavbarTrabajadores/>
<Separacion/>

<body>

<div className="table-verificacion">

<table className="table-verificacion">
    <div id="fechacss">{fechita}</div>
<thead>


<tr>


    <th>Hora</th><th>Realizado</th><th>No Realizado</th><th>Contacto</th><th>Dirección</th>
</tr>
</thead>

<Confirmacion fecha={fechita}/>

</table>
   
</div>

</body>

</div>
)

}
export default Verificacion
