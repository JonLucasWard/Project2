import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';

export class GetTransactionsbyUserId extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <ManagerTabsComponent />
                <h1>Transaction Information: View Transactions by Users</h1>
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
                    <form>
                    <div className="form-row">
                        <br></br>
                        <div className="form-group col-md-2">
                            <label id="label">Search Transaction by User ID</label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" />
                            <input type="submit" />
                        </div>
                        <div className="form-group col-md-8">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Transaction ID</th>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Car ID</th>
                                    <th scope="col">Date Rented</th>
                                    <th scope="col">Expected Return</th>
                                    <th scope="col">Approved</th>
                                    <th scope="col">Name On Card</th>
                                    <th scope="col">Drivers License No.</th>
                                    <th scope="col">CVV</th>
                                    <th scope="col">Amount</th>
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
                                <td></td>
                            </tr>
                            </tbody>        
                        </table>
                        </div>
                    </div>
                    </form>
            </div>
        )
    }
}