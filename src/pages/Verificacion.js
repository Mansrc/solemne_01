import React from "react"
import Confirmacion from "../components/Confirmacion"
import NavbarTrabajadores from "../components/NavbarTrabajadores"
import Separacion from "../components/Separacion"


const Verificacion = ()=>{
return(
<div>
<NavbarTrabajadores/>
<Separacion/>

<body>

<div className="table-verificacion">

<table className="table-verificacion">
    <div id="fechacss">2021-02-21</div>
<thead>


<tr>


    <th>Hora</th><th>Realizado</th><th>No Realizado</th><th>Contacto</th><th>Dirección</th>
</tr>
</thead>

<Confirmacion/>

</table>
   
</div>

</body>

</div>
)

}
export default Verificacion
