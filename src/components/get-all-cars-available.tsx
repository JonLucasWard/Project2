import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';
import { IState, IManageCarState } from '../reducers/index';
import * as carActions from '../actions/car-actions';
import { connect } from 'react-redux';
import { MockCar, MockCar2 } from '../models/dummyData';

export interface ICarByStatusProps {
    car: IManageCarState;
    carsPageRequest: (page: number) => void;
    carsGetResolved: (car:object) => void;
    carsUpdateRequest: (id:number) => void;
    deleteCars: (id: number) => void;
    enterNewCar: (car: object) => void;
    viewAvailableCar: (status: number) => void;
}

class GetAllCarsAvailableComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            carid: 0,
            brand: "",
            model: "",
            makeyear: "",
            occupancy: "",
            transmission: "",
            mileage: 0,
            color: "",
            ac: true,
            statusid: 0,
            rate: 0,
            typeid: 0
        }
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            statusid: value
        });
    }

    handleSubmit() {
        alert("Retrieving all cars by user ID");
    }

    render() {
        return(
            <div id="manager-component-background">
               <ManagerTabsComponent />
                <h1 id="white-heading">Car Information: View Available/Unavailable Cars</h1>
                <hr></hr>
                <form>
                    <div className="form-row">
                        <Link to="/get-all-cars-information">
                            <button type="submit" className="btn btn-dark">Get All Car Information</button>
                        </Link>
                        <Link to="/get-all-cars-available">
                            <button type="submit" className="btn btn-dark">View Available Cars</button>
                        </Link>
                        <Link to="/enter-a-new-car">
                            <button type="submit" className="btn btn-dark">Enter a New Car</button>
                        </Link>
                        <br></br>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <br></br>
                        <div className="form-group col-md-2">
                            <label id="label">Search Availability</label>
                        </div>
                        <div className="form-group col-md-2">
                            <select onChange={(event:any) => this.handleChange(event)}>
                                <option value="1">Available</option>
                                <option value="2">Unavailable</option>
                            </select>
                            <button type="submit" value="Search" className="btn btn-dark" onClick={() => this.props.VIEW_AVAILABLE_CAR({MockCar})}>Submit</button>
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
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state: IState) => ({
    car: state.carComponent
});

const mapDispatchToProps = {
    CARS_GET_RESOLVED: carActions.carsGetResolved,
    CARS_UPDATE_REQUEST: carActions.carsUpdateRequest,
    VIEW_AVAILABLE_CAR: carActions.viewAvailableCar
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAllCarsAvailableComponent)