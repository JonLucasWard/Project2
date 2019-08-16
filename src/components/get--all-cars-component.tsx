import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';
import { IState, GetAllCarsState } from '../reducers/index';
import { getAllCarsSubmitRequest, getAllCarsSearchResolved} from '../actions/car-actions/get-all-cars-actions';
import { connect } from 'react-redux';
import Axios from 'axios';
import '../include/bootstrap';

export interface GetAllCarsProps {
    allCars: GetAllCarsState;
    getAllCarsSubmitRequest: () => void;
    getAllCarsSearchResolved: (
        carid: number,
        brand: string,
        model: string,
        makeYear: string,
        occupancy: number,
        transmission: string,
        mileage: number,
        color: string,
        ac: boolean,
        statusid: number,
        rate: number,
        typeid: number,
        allCars: {}
    ) => void;
}

class GetAllCarsComponents extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit() {
        console.log('submit clicked for all carsl');
        const url = `https://localhost:8080/teame/cars`;
        this.props.getAllCarsSubmitRequest();
        Axios.get(url).then(payload => {
            const carid = payload.data.carid;
            const brand = payload.data.brand;
            const model = payload.data.model;
            const makeyear = payload.data.makeyear;
            const occupancy = payload.data.occupancy;
            const transmission = payload.data.transmission;
            const mileage = payload.data.transmission;
            const color = payload.data.color;
            const ac = payload.data.ac;
            const statusid = payload.data.inputValue;
            const rate = payload.data.rate;
            const typeid = payload.data.typeid;

            this.props.getAllCarsSearchResolved(
                carid, 
                brand, 
                model, 
                makeyear, 
                occupancy, 
                transmission,
                mileage,
                color,
                ac,
                statusid,
                rate,
                typeid
            );
        })
    }

    render() {
        return(
            <div id="manager-component-background">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <ManagerTabsComponent />
                    </div>
                </div>
                <div className="form-row">
                        <h1 id="white-heading">Car Information: Get all Cars</h1>
                </div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12">
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
                    </div>
                    <div className="form-row">
                       <div className="form-group col-md-6" >
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
                       </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <button type="submit" className="btn btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </form>
                </div>
        ) 
    }
}

const mapStateToProps = (state: IState) => ({
    getAllCars: state.getAllCars
})

const mapDispatchToProps = {
    getAllCarsSubmitRequest: getAllCarsSubmitRequest,
    getAllCarsSearchResolved: getAllCarsSearchResolved
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllCarsComponents);