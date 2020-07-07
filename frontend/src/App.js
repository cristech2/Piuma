import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //importo el enrutador de react
import CPNavbar from "./components/ControlPanel/Navbar/CpNavbar";
import StoreNavbar from "./components/Tienda/Navegacion/StoreNavbar";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StoreNavbar />
        </Route>
        <Route path="/control_panel">
          <CPNavbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
