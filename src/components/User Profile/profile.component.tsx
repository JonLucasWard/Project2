import React from 'react';
import Axios from 'axios';
import { User } from '../../models/AppModels';
import { MockUser } from '../../models/dummyData';

interface IProfileComponentProps {
    user: User;
    submitting: any;
}

export class ProfileComponent extends React.Component<IProfileComponentProps, any> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            password: this.props.user.password,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            email: this.props.user.email,
            phone: this.props.user.phone,
            driverslicenseno: this.props.user.driverslicenseno,
            roleid: this.props.user.roleid
        }
    }

    handleInputChange(e: any) { // accept value and call the inputUpdate function 
        const value = e.target.value;
        const field = e.target.id;
        this.setState({
            ...this.state,
            [field]: value
        })
    }

    submit = () => { // when clicked, send input value to dispatcher
        let obj = this.state;
        this.props.submitting(obj);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="id">UserId:</label></td>
                            <td><input id='id' type='number' value={this.state.id} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="username">UserName:</label></td>
                            <td><input id='username' type='string' value={this.state.username} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password:</label></td>
                            <td><input id='password' type='password' value={this.state.password} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="firstname">First Name:</label></td>
                            <td><input id='firstname' type='string' value={this.state.firstname} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lastname">Last Name:</label></td>
                            <td><input id='lastname' type='string' value={this.state.lastname} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email:</label></td>
                            <td><input id='email' type='string' value={this.state.email} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Phone:</label></td>
                            <td><input id='phone' type='string' value={this.state.phone} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="driverslicenseno">Driver's License #:</label></td>
                            <td><input id='driverslicenseno' type='string' value={this.state.driverslicenseno} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="roleid">Role:</label></td>
                            <td><input id='roleid' type='number' value={this.state.roleid} onChange={(e) => this.handleInputChange(e)}></input></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        )
    }
}

