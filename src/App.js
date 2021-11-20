import './App.css';
import Inicio from "./pages/Inicio";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Contactar from "./pages/Contactar"
import Servicios from "./pages/Servicios"
import Acercade_Servicios from "./pages/Acercade_Servicios"
import Acerca_Nosotros from "./pages/Acerca_nosotros"
import Verificacion from './pages/Verificacion';
import HomeTrabajador from './pages/HomeTrabajador';
import InicioBoss from './pages/InicioBoss';
import RegistroPrueba from './pages/RegistroTrabajador/RegistroPrueba';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import ReservaHora from './pages/ReservaHora/ReservaHora';
import CancelacionHora from './pages/CancelacionHora/CancelacionHora';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/contactar" component={Contactar}/>
        <Route exact path="/servicios" component={Servicios}/>
        <Route exact path="/reserva/prueba" component={ReservaHora}/>
        <Route exact path="/acerca_de/admin" component={InicioSesion}/> 
        <Route exact path="/registro/prueba" component={RegistroPrueba}/>
        <Route exact path="/servicios/scannerGold" component={ReservaHora}/>
        <Route exact path="/acerca_de/nosotros" component={Acerca_Nosotros}/>
        <Route exact path="/acerca_de/ingresar/jefe" component={InicioBoss}/>
        <Route exact path="/servicios/scannerSilver" component={ReservaHora}/> 
        <Route exact path="/servicios/scannerplatinium" component={ReservaHora}/>
        <Route exact path="/acerca_de/servicios" component={Acercade_Servicios}/>  
        <Route exact path="/acerca_de/cancelar_hora" component={CancelacionHora}/>
        <Route exact path="/acerca_de/ingresar/horario" component={HomeTrabajador}/>
        <Route exact path="/acerca_de/ingresar/horario/confirmacion" component={Verificacion}/>     
      </Switch>  
    </BrowserRouter>
  );
}

export default App;