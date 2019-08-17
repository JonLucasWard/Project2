import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';
import { IState, GetAllUsersState, state } from '../reducers/index';
import { getAllUsersSubmitRequest, getAllUsersSearchResolved} from '../actions/user-actions/get-all-users-actions';
import { connect, connectAdvanced } from 'react-redux';
import Axios from 'axios';

export interface GetAllUserProps {
    user: GetAllUsersState;
    getAllUsersSubmitRequest: () => void;
    getAllUsersSearchResolved: (
        userid: number, 
        driverlicense: string, 
        email: string,
        firstname: string,
        lastname: string,
        password: string,
        phonenumber: string,
        role: number,
        username: string,
        users: {}
        ) => void;
}

class GetAllUsersComponents extends React.Component<GetAllUserProps> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit() {
        console.log("submit clicked");
        const url = 'https://localhost:8080/teame/users';
        this.props.getAllUsersSubmitRequest();
        Axios.get(url).then(payload => {
            const userid = payload.data.userid;
            const driverlicense = payload.data.driverlicense;
            const email = payload.data.email;
            const firstname = payload.data.firstname;
            const lastname = payload.data.lastame;
            const password = payload.data.password;
            const phonenumber = payload.data.phonenumber;
            const role = payload.data.role;
            const username = payload.data.username;
            const users = payload.data.users.map((mappingUsers: any) => {
                return mappingUsers.users
            });
            this.props.getAllUsersSearchResolved(userid, driverlicense, email, firstname, lastname, password, phonenumber, role, username, users)
        })
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
                    <h1 id="white-heading">User Information: Get All Users</h1>
                    <hr></hr>
                </div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12">
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
                    <button type="submit" className="btn btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state: IState) => ({
    users: state.getAllUsers
});

const mapDispatchToProps = {
    getAllUsersSubmitRequest: getAllUsersSubmitRequest,
    getAllUsersSearchResolved: getAllUsersSearchResolved
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllUsersComponents);