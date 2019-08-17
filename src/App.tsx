import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from "react-router-dom";
import SignInSide from './components/LogIn_Main_Component';
import SignUp from './components/Sign_Up_Main_Component';
import MainAppBar from './components/NavBar_Component';
import { Home } from './components/Home_Component';
import Login_SignUp from './components/LogIn_SignUp_Component';

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainAppBar/>
        <Switch>
        
        <Route path ="/" exact component={Home}/>
        <Route path ="/Home" exact component={Home}/>
        <Route path ="/Login" exact component={Login_SignUp}/>
        </Switch>
     
    </HashRouter>
  );
}

export default App;
