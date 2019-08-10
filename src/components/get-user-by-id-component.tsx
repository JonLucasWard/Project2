import React from 'react';
import  { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';

export class GetUserByIdComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <ManagerTabsComponent />
                <h1>User Information: Get Users by ID</h1>
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
                </form>
            </div>
        )
    }
}