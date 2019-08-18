import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';
import { IState, GetAllRentalState } from '../reducers/index';
import { getAllRentalsSubmitRequest, getAllRentalsSearchResolved} from '../actions/rental-actions/get-all-rentals-actions';
import { connect } from 'react-redux';
import Axios from 'axios';

export interface GetAllRentalProps {
    allRentals: GetAllRentalState;
    getAllRentalsSubmitRequest: () => void;
    getAllRentalsSearchResolved: (
        transactionid: number,
        userid: number,
        carid: number,
        daterented: string,
        expectedreturn: string,
        approved: boolean,
        allRentals: {}
    ) => void;
}

export class GetAllTransactionsComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit() {
        console.log('submit clicked for all rentals');
        const url = 'https"//localhost: 8080/teame/rentals/all';
        this.props.getAllRentalsSubmitRequest();
        Axios.get(url).then(payload => {
            const transactionid = payload.data.transactionid;
            const userid = payload.data.userid;
            const carid = payload.data.carid;
            const daterented = payload.data.daterented;
            const expectedreturn = payload.data.expectedreturn;
            const approved = payload.data.approved;

            this.props.getAllRentalsSearchResolved(
                transactionid, userid, carid, daterented, expectedreturn, approved
            );
        })
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
                    <h1 id="white-heading">Transaction Information: View All Transactions</h1>
                    <hr></hr>
                </div>
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
                    <button className="btn btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => ({
    getAllRentals: state.getAllRentals
})

const mapDispatchToProps = {
    getAllRentalsSubmitRequest: getAllRentalsSubmitRequest,
    getAllRentalsSearchResolved: getAllRentalsSearchResolved
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllTransactionsComponent)