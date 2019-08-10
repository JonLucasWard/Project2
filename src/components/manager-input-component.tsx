import React from 'react'; 
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import { HashRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { CarInformationComponent } from './car-information-component';
import { UserInformationComponent } from './user-information-component';
import { TransactionInformationComponent } from './transaction-information-component';

export class ManagerInputComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
}

handleUserSubmit() {
    alert("Retrieving user information!");
}

handleCarSubmit() {
    alert("Retrieving car inforamtion");
}

handleTransactionSubmit() {
    alert("Retrieving transactions!");
}

render() {
    return (
        <div>
            <HashRouter>
            <ManagerTabsComponent />
            </HashRouter>
        </div>
    )
}

}