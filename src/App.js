import './App.css';
import Inicio from "./pages/Inicio";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contactar from "./pages/Contactar"
import Servicios from "./pages/Servicios"
import Acercade_Servicios from "./pages/Acercade_Servicios"
import IngresoTrabajadores from "./pages/IngresoTrabajadores"
import CancelarHora from "./pages/CancelarHora"
// import Registrarse from "./pages/Registrarse"
import Acerca_Nosotros from "./pages/Acerca_nosotros"
import ReservarHora1 from "./pages/ReservarHora"


import Calendario from './pages/Calendario';
import ReservarHora4 from "./pages/ReservarHora4"
import HomeTrabajador from './pages/HomeTrabajador';
import RegistroPrueba from './pages/RegistroTrabajador/RegistroPrueba';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import ReservaHora from './pages/ReservaHora/ReservaHora';
import CancelacionHora from './pages/CancelacionHora/CancelacionHora';


function App() {
  return (
    <>
      <Router>
      <Switch>
      
        <Route exact path="/">
          <Inicio/>
        </Route>
        <Route exact path="/contactar">
          <Contactar/>
        </Route>
        <Route exact path="/servicios">
          <Servicios/>
        </Route>
        <Route exact path="/acerca_de/servicios">
          <Acercade_Servicios/>
        </Route>
        <Route exact path="/acerca_de/admin">
            <InicioSesion/>
        </Route>
        
        <Route exact path="/acerca_de/cancelar_hora">
            <CancelacionHora />
        </Route>
        {/* <Route exact path="/acerca_de/registrarse">
            <Registrarse />
        </Route> */}
        <Route exact path="/acerca_de/nosotros">
            <Acerca_Nosotros />
        </Route>
        <Route exact path="/servicios/scannerGold">
            <ReservaHora/>
        </Route>
        <Route exact path="/servicios/scannerplatinium">
            <ReservaHora/>
        </Route>
        <Route exact path="/servicios/scannerSilver">
            <ReservaHora/>
        </Route>
        <Route exact path="/servicios/scannerGold/calendario/reserva">
            <Calendario/>
        </Route>
        
        
        <Route exact path="/servicios/scannerGold/vehiculo/horas/trabajador">
            <ReservarHora4/>
        </Route>
        <Route exact path="/acerca_de/ingresar/horario">
            <HomeTrabajador/>
        </Route>
        <Route exact path="/registro/prueba">
            <RegistroPrueba/>
        </Route>
        <Route exact path="/login/prueba">
            <InicioSesion/>
        </Route>
        <Route exact path="/reserva/prueba">
            <ReservaHora/>
        </Route>
        
        
      </Switch>
      
    </Router>
    </>
  );
}

export default App;