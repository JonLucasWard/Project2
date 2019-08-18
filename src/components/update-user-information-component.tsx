import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import Axios from 'axios';
import { User } from '../models/AppModels';
import { MockUser } from '../models/dummyData';
import { IState, IManagerUserState } from '../reducers/index';
import * as userActions from '../actions/user-actions';
import { connect } from 'react-redux';
import { directive } from '@babel/types';

export interface IUpdateUserProps {
    user: User;
    submitting: any;
}

export class UpdateUserInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="manager-component-background">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <ManagerTabsComponent />
                    </div>
                </div>
                <div className="form-row">
                    <h1 id="white-heading">User Information: Update User Information</h1>
                    <hr></hr>
                </div>
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
                        <br></br>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <br></br>
                        <div className="form-group col-md-2">
                            <label className="white-label">Search User by Id</label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" />
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                        <div className="form-group col-md-8">
                            <table className="table table-dark">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h1 className="white-label">Update Information</h1>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="User ID" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Role" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Phone Number"></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Drivers License Number" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
