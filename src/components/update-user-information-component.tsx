import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';

export class UpdateUserInformationComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ManagerTabsComponent />
                <h1>User Information: Update User Information</h1>
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
                            <label id="label">Search User by Id</label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" />
                            <input type="submit" />
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
                            <input type="text" placeholder="User ID"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-2">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Drivers License Number"/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Role"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}