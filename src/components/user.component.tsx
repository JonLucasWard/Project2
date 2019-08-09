import React from 'react';
import Axios from 'axios';
import { IState, IUserState } from '../reducers';
import { userGetResolved, userPageRequest, userUpdate, deleteRental } from '../actions/user.actions';
import { connect } from 'react-redux';

export interface IUserProps { // Properties that sub components can inherit
    user: IUserState; //accept interface from reducers

    // Action properties from the dispatcher, imported from actions
    // It is not necessary to return any value when this is called, the state update is what we want
    userGetResolved: (id: number) => void;
    userPageRequest: (page: number) => void;
    userUpdate: (inputValue: string) => void;
    deleteRental: (id: number) => void;
}

export class UserComponent extends React.Component<IUserProps> {
constructor(props: any) { // create own properties
    super(props); // inherit React component properties
}

render() {
    return (
        <div>
            <div id="user-display"/* div for User's personal information*/>
                <h1>User Profile</h1>
                <table>
                    <tr>
                        <td><label htmlFor="id#">UserId: </label></td>
                        <td><input id='id#' type='number' value={this.props.user.thisUser.id}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="username">UserName: </label></td>
                        <td><input id='username' type='string' value={this.props.user.thisUser.username}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password: </label></td>
                        <td><input id='password' type='password' value={this.props.user.thisUser.password}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="firstname">First Name: </label></td>
                        <td><input id='firstname' type='sting' value={this.props.user.thisUser.firstname}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="lastname">Last Name: </label></td>
                        <td><input id='lastname' type='string' value={this.props.user.thisUser.lastname}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email: </label></td>
                        <td><input id='email' type='string' value={this.props.user.thisUser.email}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email: </label></td>
                        <td><input id='email' type='string' value={this.props.user.thisUser.email}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phone">Phone: </label></td>
                        <td><input id='phone' type='string' value={this.props.user.thisUser.phone}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="driverslicenseno">Driver's License #: </label></td>
                        <td><input id='driverslicenseno' type='string' value={this.props.user.thisUser.driverslicenseno}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="roleid">Email: </label></td>
                        <td><input id='roleid' type='number' value={this.props.user.thisUser.roleid}></input></td>
                    </tr>
                </table>
                <button>Submit</button>
        </div>
        <div id="rent-display" /* div for rental history*/>
            <h1>Rented Cars</h1>
        </div>
    </div>
        );
    }
}
                

const mapStateToProps = (state: IState) => ({ // define mapStateToProps function, making userProfile state
    user: state.userProfile
});

const mapDispatchToProps = { // define mapDispatchToProps
    userGetResolved: userGetResolved,
    userPageRequest: userPageRequest,
    userUpdate: userUpdate,
    deleteRental: deleteRental
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);