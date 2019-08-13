import React from 'react';
import './App.css';
import NavComponent from './components/nav-component';
import './include/bootstrap';
import {Switch, Route} from 'react-router';
import {HashRouter} from 'react-router-dom';
import { InputRentalFormComponent } from './components/search-page-input-forms';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ManagerInputComponent } from './components/manager-input-component';
import { CarInformationComponent } from './components/car-information-component';
import { TransactionInformationComponent } from './components/transaction-information-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { UserInformationComponent } from './components/user-information-component';
import    GetAllUsersComponents  from './components/get-all-users-component';
import { GetUserByIdComponent } from './components/get-user-by-id-component';
import { UpdateUserInformationComponent } from './components/update-user-information-component';
import  GetAllCarsComponents  from './components/get--all-cars-component';
import { GetAllCarsAvailableComponent } from './components/get-all-cars-available';
import { EnterNewCarComponent } from './components/enter-new-car-component';
import  GetAllTransactionsComponent  from './components/get-all-transactions-component';
import { GetTransactionsbyUserId } from './components/get-transactions-by-users';
import { UpdateTransactionComponent } from './components/update-transactions-component';
// import './App.scss';
import { Provider } from 'react-redux';
import { store } from './Store';
import ClickerComponent from './components/clicker.component';
// If you exported the connected component as a default export
// ensure you importing that component with a default import (no {})
import PokeComponent from './components/poke.component';
// import { GetAllCarInformationComponent } from './components/get-all-car-information-component';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
      <HashRouter>
        <NavComponent />
        <Switch>
        <Switch /* switch different routes based on routers, clicking a component opens new route*/>
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/poke" component={PokeComponent} />
          <Route path="/home" />
          <Route path="/look-for-a-car" component={InputRentalFormComponent} />
          <Route path="/manager-actions" component={ManagerInputComponent} />
          <Route path="/users" component={UserInformationComponent} />
          <Route path="/get-all-users" component={GetAllUsersComponents} />
          <Route path="/get-user-by-id" component={GetUserByIdComponent} />
          <Route path="/update-user-information" component={UpdateUserInformationComponent} />
          <Route path="/cars" component={CarInformationComponent} />
          <Route path="/get-all-cars-information" component={GetAllCarsComponents} />
          <Route path="/get-all-cars-available" component={GetAllCarsAvailableComponent} />
          <Route path="/enter-a-new-car" component={EnterNewCarComponent} />
          <Route path="/transactions" component={TransactionInformationComponent} /> 
          <Route path="/get-all-transactions" component={GetAllTransactionsComponent} />  
          <Route path="/get-transactions-by-user" component={GetTransactionsbyUserId} />  
          <Route patth="/update-transaction" component={UpdateTransactionComponent} /> 
          {/* <Route component={ClickerComponent} /> */}
        </Switch>
        </Switch>
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
