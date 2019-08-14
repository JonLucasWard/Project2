import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';
import { IState, IManageCarState } from '../reducers/index';
import * as carActions from '../actions/car-actions';
import { connect } from 'react-redux';
import { MockCar, MockCar2 } from '../models/dummyData';
import '../include/bootstrap';

export interface ICarProps {
    car: IManageCarState;
    carsPageRequest: (page: number) => void;
    carsGetResolved: (car:object) => void;
    carsUpdateRequest: (id:number) => void;
    deleteCars: (id: number) => void;
    enterNewCar: (car: object) => void;
    viewAvailableCar: (status: number) => void;
}

class GetAllCarsComponents extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    // getAllCars = (id: number) => {
    //     this.props.carsGetResolved(id);
    // }

    render() {
        return(
            <div id="manager-component-background">
                <div id="manager-component-background">
                <ManagerTabsComponent />
                <h1 id="white-heading">Car Information: Get all Cars</h1>
                <hr></hr>
                <form>
                    <div className="form-row">
                        <Link to="/get-all-cars-information">
                            <button type="submit" className="btn btn-dark" >Get All Car Information</button>
                        </Link>
                        <Link to="/get-all-cars-available">
                            <button type="submit" className="btn btn-dark">View Available Cars</button>
                        </Link>
                        <Link to="/enter-a-new-car">
                            <button type="submit" className="btn btn-dark">Enter a New Car</button>
                        </Link>
                    </div>
                    <br></br>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Car ID</th>
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
                    <button type="submit" className="btn btn-dark" onClick={() => this.props.CARS_GET_RESOLVED({MockCar, MockCar2})}>Submit</button>
                </form>
                </div>
            </div>
        ) 
    }
}
const mapStateToProps = (state: IState) => ({
    car: state.carComponent
});

const mapDispatchToProps = {
    CARS_GET_RESOLVED: carActions.carsGetResolved,
    CARS_PAGE_REQUEST: carActions.carsPageRequest,
    CARS_UPDATE_REQUEST: carActions.carsUpdateRequest,
    DELETE_CARS: carActions.deleteCars,
    ENTER_NEW_CAR: carActions.enterNewCar,
    VIEW_AVAILABLE_CAR: carActions.viewAvailableCar
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAllCarsComponents)