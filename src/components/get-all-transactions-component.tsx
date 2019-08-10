import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';

export class GetAllTransactionsComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <ManagerTabsComponent />
                <h1>Transaction Information: View All Transactions</h1>
                <hr></hr>
                    <div className="form-row">
                        <Link to="/get-all-transactions">
                            <button type="submit" className="btn btn-dark">Get All Transaction Information</button>
                        </Link>
                        <Link to="/get-transactions-by-user">
                            <button type="submit" className="btn btn-dark">View Transactions by Users</button>
                        </Link>
                        <Link to="/update-transaction">
                            <button type="submit" className="btn btn-dark">Update Transactions</button>
                        </Link>
                        <br></br>
                    </div>
                    <br></br>
                    <table className=" table table-dark">
                    <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Drivers License No.</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>        
                    </table>
            </div>
        )
    }
}