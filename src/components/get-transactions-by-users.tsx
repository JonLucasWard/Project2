import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import { IState, GetRentalByUserState, state } from '../reducers/index';
import { getRentalsByUserInputUpdate, getRentalsByUserSubmitRequest, getRentalsByUserSearchResolved} from '../actions/rental-actions/get-rentals-by-user-actions';
import { connect } from 'react-redux';
import Axios from 'axios';
import { getAllRentalsSearchResolved } from '../actions/rental-actions/get-all-rentals-actions';

export interface GetRentalByUserProps {
    rentalByUser: GetRentalByUserState;
    getRentalByUserInputUpdate: (inputValue: number) => void;
    getRentalByUserSubmitRequest: () => void;
    getRentalByUserSearchResolved: (
        transactionid: number,
        userid: number,
        carid: number,
        daterented: string,
        expectedreturn: string,
        description: string,
        approved: boolean
    ) => void;
}

export class GetTransactionsbyUserId extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    
   handleInputChange(event: any) {
       console.log('input checking');
       const value = event.target.value;
       this.props.getRentalByUserInputUpdate(value);
   }

   handleSubmit() {
       console.log('submit checked');
       const url = 'https://localhost: 8080/teame/rentals/users.query';
       this.props.getRentalByUserSubmitRequest();
       Axios.get(url).then(payload => {
           const transactionid = payload.data.transactionid;
           const userid = payload.data.userid;
           const carid = payload.data.carid;
           const daterented = payload.data.daterented;
           const expectedreturn = payload.data.expectedreturn;
           const description = payload.data.description;
           const approved = payload.data.approved;

           this.props.getRentalByUserSearchResolved(
               transactionid, userid, carid, daterented, expectedreturn, description, approved
           )
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
                        <h1 id="white-heading">Transaction Information: View Transactions by Users</h1>
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
                    <form>
                    <div className="form-row">
                        <br></br>
                        <div className="form-group col-md-2">
                            <label className="white-label">Search Transaction by User ID</label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" onChange={(event) => this.handleInputChange(event)}/>
                            <button type="submit" className="btn btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
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
const mapStateToProps = (state: IState) => ({
    rentalByUser: state.getRentalByUser
});

const mapDispatchToProps = {
    getRentalByUserInputUpdate: getRentalsByUserInputUpdate,
    getRentalByUserSubmitRequest: getRentalsByUserSubmitRequest,
    getRentalByUserSearchResolved: getAllRentalsSearchResolved
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTransactionsbyUserId)