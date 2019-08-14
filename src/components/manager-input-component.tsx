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

render() {
    return (
        <div>
            <div id="manager-component-background">
            <HashRouter>
            <ManagerTabsComponent />
            </HashRouter>
            </div>
        </div>
    )
}

}