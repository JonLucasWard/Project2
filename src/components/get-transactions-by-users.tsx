import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import { IState, IManageRentalState, state } from '../reducers/index';
import * as rentalActions from '../actions/rental-actions';
import { connect } from 'net';
import { MockRental } from '../models/dummyData';
import { string } from 'prop-types';

export interface IRentalPropsByUser {
    rental: IManageRentalState;
    rentalsGetResolved: (rental: object) => void;
    rentalsGetResolvedByUser: (id: number) => void;
    rentalsUpdateRequest: (id: number) => void;
}

export class GetTransactionsbyUserId extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: 0,
            userid: 0,
            carid: 0,
            daterented: "",
            expectedreturn: "",
            description: "",
            appoved: true
        }
    }
    
    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            id: value
        });
    }

    handleSubmit() {
        alert("Retrieving rentals by id");
    }

    render() {
        return(
            <div id="manager-component-background">
                <ManagerTabsComponent />
                <h1 id="white-heading">Transaction Information: View Transactions by Users</h1>
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
                            <label className="white-label">Search Transaction by User ID</label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" value={this.state.id} onChange={(event: any) => this.handleChange(event)} />
                            <button type="submit" className="btn btn-dark" onClick={() => this.props.RENTALS_GET_RESOLVED_BY_USER({MockRental})}>submit</button>
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
// const mapStateToProps = (state: IState) => ({
//     rental: state.rentalComponent
// });

// const mapDispatchToProps = {
//     RENTALS_GET_RESOLVED: rentalActions.rentalsGetResolved,
//     RENTALS_GET_RESOLVED_BY_USER: rentalActions.rentalsGetResolvedByUser,
//     RENTALS_UPDATE_REQUEST: rentalActions.rentalsUpdateRequest
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GetTransactionsbyUserId)