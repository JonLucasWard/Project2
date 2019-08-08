import React from 'react'; 
import { Link } from 'react-router-dom';
import  { Tabs, Tab, Table } from 'react-bootstrap';
import background from '../assets/darkness.png';

export class ManagerInputComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
}

handleUserSubmit() {
    alert("Retrieving user information!");
}

handleCarSubmit() {
    alert("REtrieving car inforamtion");
}

handleTransactionSubmit() {
    alert("Retrieving transactions!");
}

render() {
    return (
        <div>
            <Tabs className="tabs-color" defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="/users" title="User Information">
                </Tab>
                <Tab Link to="/cars" title="Car Information">
                </Tab>
                <Tab Link to="/transactions" title="Transaction Information">
                </Tab>
            </Tabs>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Drivers License Number</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
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
                        <td></td>
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
                        <td></td>
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
            </Table>
        </div>
    )
}

}