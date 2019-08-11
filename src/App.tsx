import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SignInSide from './components/Login_Component';
import SignUp from './components/Signup_Component';
import MainAppBar from './components/NavBar_Component';

const App: React.FC = () => {
  return (
    <HashRouter>
     
        <Switch>
        <MainAppBar/>
        <Route path ="/" exact component={SignInSide}/>
        <Route path ="/" exact component={SignUp}/>
        </Switch>
     
    </HashRouter>
  );
}

export default App;
