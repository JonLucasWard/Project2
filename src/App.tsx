import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import './include/bootstrap';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import BlankComponent from './components/title-bar';
import { SearchDisplayComponent } from './components/search-display-component';
//import {SearchDisplayComponent} from './components/search-display-component'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div>

        <Switch>

          <Route path="/" exact component={SearchDisplayComponent} />


        </Switch>

      </div>
    </HashRouter>
=======
// import './App.scss';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClickerComponent from './components/clicker.component';
import NavComponent from './components/nav.component';
// If you exported the connected component as a default export
// ensure you importing that component with a default import (no {})
import PokeComponent from './components/poke.component';
import {SearchDisplayComponent} from './components/search-display-component';
const App: React.FC = () => { // app is a function component because it just runs immediately, it is the store!
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Switch /* switch different routes based on routers, clicking a component opens new route*/>
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/poke" component={PokeComponent} />
          <Route path="/" exact component={SearchDisplayComponent} />
          <Route component={ClickerComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
>>>>>>> 1531ae7e661b9a7ff0af37a230f0e6cec38bae06
  );
}

export default App;
