import React from 'react'
import Navbar from "../components/Navbar"
import Separacion from '../components/Separacion'

const ReservarHora4 = () => {
    return (
        <div>
          <Navbar/>
          <Separacion/>
          <section> 
          <div className='messi'>
          <nav className="navfecha"><label className="fecha">Miercoles 02 Junio</label></nav>
          <div className="row">
            <div className="column">
              <button disabled className="margenes">
               <label >Trabajador 1</label>
              </button >
              <button className="margenes">
               <label>07:00 Am</label>
              </button>
              <button className="margenes"> 
               <label>08:00 Am</label>
              </button>
              </div>
              <div className="column">
              <button disabled className="margenes">
               <label>Trabajador 2</label>
              </button >
              <button className="margenes">
               <label>10:00 Am</label>
              </button>
              <button className="margenes">
               <label>09:00 Am</label>
              </button>
              </div>
              </div>
          </div>
          </section>
        </div>
    )
}
 export default ReservarHora4