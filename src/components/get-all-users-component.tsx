import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';
import { IState, IManagerUserState, state } from '../reducers/index';
import * as userActions from '../actions/user-actions';
import { connect } from 'react-redux';
import { MockUser, MockUser2 } from '../models/dummyData';

export interface IUserProps {
    user: IManagerUserState;
    usersGetResolved: (user: object) => void;
    usersUpdateRequest: (id: number) => void;
    userByIdResolved: (id: number) => void;
}

class GetAllUsersComponents extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="manager-component-background">
                <ManagerTabsComponent />
                <h1 id="white-heading">User Information: Get All Users</h1>
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
                    </div>
                    <br></br>
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
                    <button type="submit" className="btn dark"onClick={() => this.props.USERS_GET_RESOLVED({MockUser, MockUser2})}>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state: IState) => ({
    user: state.userComponent
});

const mapDispatchToProps = {
    USERS_GET_RESOLVED: userActions.usersGetResolved,
    USERS_UPDATE_REQUEST: userActions.usersUpdateRequest,
    USER_BY_ID_RESOLVED: userActions.userByIdResolved
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAllUsersComponents)