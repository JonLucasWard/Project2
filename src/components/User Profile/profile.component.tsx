import React from 'react';
import Axios from 'axios';
import { User } from '../../models/AppModels';

interface IProfileComponentProps {
    user: User;
}

export class ProfileComponent extends React.Component<IProfileComponentProps> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    handleInputChange = (e: any) => { // accept value and call the inputUpdate function 
        console.log('input changing');
        const value = e.target.value;
        this.props.inputUpdate(value);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><label htmlFor="id#">UserId: </label></td>
                        <td><input id='id#' type='number' value={this.props.user.id} onChange={this.props.handleInputChange}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="username">UserName: </label></td>
                        <td><input id='username' type='string' value={this.props.user.username}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password: </label></td>
                        <td><input id='password' type='password' value={this.props.user.password}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="firstname">First Name: </label></td>
                        <td><input id='firstname' type='string' value={this.props.user.firstname}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="lastname">Last Name: </label></td>
                        <td><input id='lastname' type='string' value={this.props.user.lastname}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email: </label></td>
                        <td><input id='email' type='string' value={this.props.user.email}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phone">Phone: </label></td>
                        <td><input id='phone' type='string' value={this.props.user.phone}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="driverslicenseno">Driver's License #: </label></td>
                        <td><input id='driverslicenseno' type='string' value={this.props.user.driverslicenseno}></input></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="roleid">Email: </label></td>
                        <td><input id='roleid' type='number' value={this.props.user.roleid}></input></td>
                    </tr>
                </table>
                <button>Submit</button>
            </div>
        )
    }
}