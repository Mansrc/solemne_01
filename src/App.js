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
import Registrarse from "./pages/Registrarse"



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
            <IngresoTrabajadores/>
        </Route>
        
        <Route exact path="/acerca_de/cancelar_hora">
            <CancelarHora />
        </Route>
        <Route exact path="/acerca_de/registrarse">
            <Registrarse />
        </Route>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;