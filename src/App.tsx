import React from 'react';
import logo from './logo.svg';
import './App.css';
import './include/bootstrap';
import './App.css';
import { HashRouter } from 'react-router-dom';
import {Switch, Route} from 'react-router';
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
  );
}

export default App;