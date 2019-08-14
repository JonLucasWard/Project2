import React from 'react';
import  { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import { IState, IManagerUserState } from '../reducers/index';
import * as userActions from '../actions/user-actions';
import { connect } from 'react-redux';
import { MockUser, MockUser2 } from '../models/dummyData'; 

export interface IUserByIdProps {
    user: IManagerUserState;
    usersGetResolved: (user: object) => void;
    usersUpdateRequest: (id: number) => void;
    userByIdResolved: (id: number) => void;
}

export class GetUserByIdComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userid: 0,
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            driverslicenseno: "",
            roleid: 0
        }
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            userid: value
        });
    }

    handleSubmit() {
        alert("Retrieving all users");
    }
    render() {
        return(
            <div id="manager-component-background">
                <ManagerTabsComponent />
                <h1 id="white-heading">User Information: Get Users by ID</h1>
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
                            <input type="number" value={this.state.userid} onChange={(event: any) => this.handleChange(event)} />
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
                        <button type="submit" className="btn btn-dark" onClick={() => this.props.USER_BY_ID_RESOLVED({MockUser})}>Submit</button>
                        </div>
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

export default connect(mapStateToProps, MapDispatchToProps)(GetUserByIdComponent)