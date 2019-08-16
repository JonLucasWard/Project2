import React from 'react';
import  { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';
import { IState, GetUserState } from '../reducers';
import { getUserInputUpdate, getUserSubmitRequest, getUserSearchResolved } from '../actions/user-actions/get-user-by-id-actions';
import { connect } from 'react-redux';
import Axios from 'axios';

export interface GetUserProps {
    user: GetUserState;
    getUserInputUpdate: (inputValue: number) => void;
    getUserSubmitRequest: () => void;
    getUserSearchResolved: (
        userid: number, 
        driverlicense: string, 
        email: string, 
        firstname: string, 
        lastname: string, 
        password: string, 
        phonenumber: string, 
        role: number, 
        username: string
        ) => void;
}

export class GetUserByIdComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    handleInputChange(event: any) {
        console.log('input checking');
        const value = event.target.value;
        this.props.getUserInputUpdate(value);
    }

    handleSubmit() {
        console.log('submit clicked');
        const url = `https://localhost:8080/teame/users/${this.props.getUserInputUpdate}`;
        this.props.getUserSubmitRequest();
        Axios.get(url).then(payload => {
            const userid = payload.data.userid;
            const driverlicense = payload.data.driverlicense;
            const email = payload.data.email;
            const firstname = payload.data.firstname;
            const lastname = payload.data.lastname;
            const password = payload.data.password;
            const phonenumber = payload.data.phonenumber;
            const role = payload.data.role;
            const username = payload.data.username;

            this.props.getUserSearchResolved(userid,driverlicense,email,firstname,lastname,password,phonenumber,role,username);
        })
    }
    render() {
        return(
            <div className="App">
            <div id="margin-hero">

            <div id="manager-component-background">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <ManagerTabsComponent />
                    </div>
                </div>
                <div className="form-row">
                        <h1 id="white-heading">User Information: Get Users by ID</h1>
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
                    <div className="form-row">
                        <br></br>
                        <div className="form-group col-md-2">
                            <label className="white-label">Search User by Id</label>
                        </div>
                        <div className="form-group col-md-2">
                        <input type="number" onChange={(event) => this.handleInputChange(event)} />
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
                        <button onClick={() => this.handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state:IState) => ({
    user: state.getUser
});

const mapDispatchToProps = {
    getUserInputUpdate: getUserInputUpdate,
    getUserSubmitRequest: getUserSubmitRequest,
    getUserSearchResolved: getUserSearchResolved
};

export default connect(mapStateToProps, mapDispatchToProps)(GetUserByIdComponent)