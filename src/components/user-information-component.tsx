import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { HashRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

export class UserInformationComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ManagerTabsComponent />
                <h1>User Information</h1>
                <hr></hr>
                <form>
                    <div className="form-row">
                        <Link to="/get-all-users">
                            <button type="submit" className="btn btn-dark">Get all Users</button>    
                        </Link>
                        <Link to="/get-user-by-id">
                            <button type="submit" className="btn btn-dark">Get User by ID</button>
                        </Link>
                        <Link to="/update-user-information">
                            <button type="submit" className="btn btn-dark">Update User Inforamtion</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}