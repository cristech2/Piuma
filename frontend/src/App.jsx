//imports
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import HomeStore from "./components/store/HomeStore";
import Store from "./components/store/Store";
import ContactStore from "./components/store/ContactStore";
import AboutStore from "./components/store/AboutStore";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Router>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={HomeStore} />
        <Route path="/tienda" component={Store} />
        <Route path="/contactanos" component={ContactStore} />
        <Route path="/nosotras" component={AboutStore} />
      </Switch>
    </Router>
  );
}

export default App;
