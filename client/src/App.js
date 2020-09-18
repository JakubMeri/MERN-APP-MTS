import React from "react";
import "./App.css";
import Domov from "./components/Domov/Domov";
import Nav from "./components/Navigacia/Nav";
import { Switch, Route } from "react-router-dom";
import Kosmonauti from "./components/Kosmonauti/Kosmonauti";
import { KosmonautProvider } from "./ContextKosmonaut";

function App() {
  return (
    <div className="App">
      <KosmonautProvider>
        <Nav />
        <Switch>
          <Route path="/" component={Domov} exact />
          <Route path="/Kosmonauti" component={Kosmonauti} exact />
        </Switch>
      </KosmonautProvider>
    </div>
  );
}

export default App;
