import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

export class ManagerTabsComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-12">
                    <ul id ="tab" className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">User Information</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cars" className="nav-link">Car Information</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/transactions" className="nav-link">Transaction Information</Link>
                        </li>
                    </ul>
                </div>
            </div>
        
         
        )
    }
}