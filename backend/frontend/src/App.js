import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //importo el enrutador de react
import HomeCtrlp from './components/ControlPanel/HomeCtrlp';
import CreateCategory from './components/ControlPanel/CreateCategory';
import Navigation from './components/Navegacion/navigation';

function App() {
  return (
    <Router>
    <Navigation/>

      <Switch>
        <Route exact path="/">
          <h1>Pagina principal</h1>
        </Route>
        <Route path="/control_panel">
          <HomeCtrlp />
        </Route>
        <Route path="/category" >
          <CreateCategory />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
