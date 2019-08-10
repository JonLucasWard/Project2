import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';

export class TransactionInformationComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ManagerTabsComponent />
                <h1>Transaction Information</h1>
                <hr></hr>
                <form>
                    <div className="form-row">
                        <Link to="/get-all-transactions">
                            <button type="submit" className="btn btn-dark">Get All Transaction Information</button>
                        </Link>
                        <Link to="/get-transactions-by-user">
                            <button type="submit" className="btn btn-dark">Get Transaction by User</button>
                        </Link>
                        <Link to="/update-transaction">
                            <button type="submit" className="btn btn-dark">Update Transaction</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}