import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import Axios from 'axios';
import { User } from '../models/AppModels';
import { MockUser } from '../models/dummyData';
import { IState, IManagerUserState } from '../reducers/index';
import * as userActions from '../actions/user-actions';
import { connect } from 'react-redux';

export interface IUpdateUserProps {
    user: User;
    submitting: any;
}

class UpdateUserInformationComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        // this.state = {
        //     userid: this.props.user.id,
        //     username: this.props.user.username,
        //     password: this.props.user.password,
        //     firstname: this.props.user.firstname,
        //     lastname: this.props.user.lastname,
        //     email: this.props.user.email,
        //     phone: this.props.user.phone,
        //     driverslicenseno: this.props.user.driverslicenseno,
        //     roleid: this.props
        // }
    }

    handleInputChange(event: any)  {
        const value = event.target.value;
        const field = event.target.id;
        this.setState({
            ...this.state,
            [field]: value
        });
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
                            <input type="number" onChange={(event: any) => this.handleInputChange(event)} />
                            <button type="submit" className="btn btn-dark" onClick={() => {this.props.USER_BY_ID_RESOLVED(MockUser)}}>Submit</button>
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
                        <div className="form-group col-md-2">
                            <input type="text" onChange={(event) => this.handleInputChange(event)} placeholder="User ID"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" onChange={(event) => this.handleInputChange(event)} placeholder="Username"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text"  onChange={(event) => this.handleInputChange(event)} placeholder="Password"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text"  onChange={(event) => this.handleInputChange(event)} placeholder="First Name"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" onChange={(event) => this.handleInputChange(event)} placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-2">
                            <input type="text"  onChange={(event) => this.handleInputChange(event)} placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" onChange={(event) => this.handleInputChange(event)} placeholder="Phone Number"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" onChange={(event) => this.handleInputChange(event)} placeholder="Drivers License Number"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" onChange={(event) => this.handleInputChange(event)} placeholder="Role"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <button type="submit"className="btn btn-dark" onClick={() => this.props.USERS_UPDATE_REQUEST([MockUser.id])}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => ({
    user: state.userComponent
});

const MapDispatchToProps = {
    USERS_GET_RESOLVED: userActions.usersGetResolved,
    USERS_UPDATE_REQUEST: userActions.usersUpdateRequest,
    USER_BY_ID_RESOLVED: userActions.userByIdResolved
}

export default connect(mapStateToProps, MapDispatchToProps)(UpdateUserInformationComponent)