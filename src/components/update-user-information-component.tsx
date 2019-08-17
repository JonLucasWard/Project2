import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import Axios from 'axios';
import { User } from '../models/App-models';
import { MockUser } from '../models/dummyData';

interface IUpdateUserProps {
    user: User;
    submitting: any;
}

export class UpdateUserInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            password: this.props.user.password,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            email: this.props.user.email,
            phone: this.props.user.phone,
            driversLicenseno: this.props.user.driverslicenseno,
            roleid: this.props.user.roleid
        }
    }

    handleInputChange(event: any) {
        const value = event.target.value;
        const field = event.target.id;
        this.setState({
            ...this.state,
            [field]: value
        })
    }

    submitChange = () => {
        let obj = this.state;
        this.props.submitting(obj);
    }

    render() {
        return (
            <div id="manager-component-background">
                <ManagerTabsComponent />
                <h1 id="white-heading">User Information: Update User Information</h1>
                <hr></hr>
                <form>
                    <div className="form-row">
                        <Link to="/get-all-users">
                            <button type="submit" className="btn btn-dark" onChange={(event) => this.handleInputChange(event)}>Get all Users</button>
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
                            <button className="btn btn-dark">Submit</button>
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
                    <h1>Update Information</h1>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.id} onChange={(event) => this.handleInputChange(event)} placeholder="User ID" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.username} onChange={(event) => this.handleInputChange(event)} placeholder="Username" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.password} onChange={(event) => this.handleInputChange(event)} placeholder="Password" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.firstname} onChange={(event) => this.handleInputChange(event)} placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.lastname} onChange={(event) => this.handleInputChange(event)} placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.email} onChange={(event) => this.handleInputChange(event)} placeholder="Email" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.phone} onChange={(event) => this.handleInputChange(event)} placeholder="Phone Number" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.driversLicenseno} onChange={(event) => this.handleInputChange(event)} placeholder="Drivers License Number" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" value={this.state.roleid} onChange={(event) => this.handleInputChange(event)} placeholder="Role" />
                        </div>
                    </div>
                    <div className="form-row">
                        <button type="submit" onClick={() => this.props.USERS_UPDATE_REQUEST([MockUser])} />
                    </div>
                </form>
            </div>
        )
    }
}