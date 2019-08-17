import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';

export class UpdateTransactionComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div id="manager-component-background">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <ManagerTabsComponent />
                    </div>
                </div>
                <div className="form-row">
                        <h1 id="white-heading">Transaction Information: Update Transaction Information</h1>
                        <hr></hr>
                </div>
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
                    <br></br>
                    <div className="form-row">
                        <br></br>
                        <div className="form-group col-md-2">
                            <label className="white-label">Search Transaction by User ID</label>
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
                    <h1>Update Information</h1>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Transaction ID"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="User ID"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Car ID"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Date Returned"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Expected Return"/>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-2">
                            <input type="text" placeholder="Approved"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Name On Card"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Drivers License Number"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="CVV"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" placeholder="Amount" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}