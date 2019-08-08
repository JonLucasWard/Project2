import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './components/nav-component';
import './include/bootstrap';
import {Switch, Route} from 'react-router';
import {HashRouter} from 'react-router-dom';
import { InputRentalFormComponent } from './components/search-page-input-forms';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ManagerInputComponent } from './components/manager-input-component';
import { CarInformationComponent } from './components/car-information-component';
import { TransactionInformationComponent } from './components/transaction-infomration-component'
const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <NavComponent />
        <Switch>
          <Route path="/home" />
          <Route path="/look-for-a-car" component={InputRentalFormComponent} />
          <Route path="/manager-actions" component={ManagerInputComponent} />
            <Switch>
              <Route path="/car-infomration" component={CarInformationComponent} />
              <Route path="/transaction-information" component={TransactionInformationComponent} />
            </Switch>
          <Route path="/action" />
          <Route path="/another-action" />
          <Route path="/something-else-here" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
