import React from "react";
import MiniDrawer from "./components/Drawer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListPelicula from "./components/ListPelicula";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MiniDrawer></MiniDrawer>
        <Switch>
          <Route exact path={["/", "/inicio"]} component={Home} />
          <Route exact path="/listar" component={ListPelicula} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
