import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupCidades from './views/signup_cidades/index'
import SignuPessoas from './views/signup_pessoas/index'
import Home from './views/home'
import NavBar from './Components/navbar'
const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/Cidades" component={SignupCidades} />
        <Route path="/Pessoas" component={SignuPessoas} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;