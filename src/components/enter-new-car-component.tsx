import React from 'react';
import { Link } from 'react-router-dom';
import { ManagerTabsComponent } from './manager-tabs-component';

export class EnterNewCarComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ManagerTabsComponent />
                <h1>Car Information: Enter New Car Information</h1>
                <hr></hr>
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
                    </div>
                    <br></br>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Brand</label>
                            <input type="text" placeholder="Brand"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Model</label>
                            <input type="text" placeholder="Model"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Make Year</label>
                            <input type="text" placeholder="Year"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Occupancy</label>
                            <select>
                                <option>4</option>
                                <option>6</option>
                                <option>8</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Transmission</label>
                            <select>
                                <option>Automatic</option>
                                <option>Transmission</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Mileage</label>
                            <input type="text" placeholder="Mileage"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Color</label>
                            <input type="text" placeholder="color"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Air Conditioning</label>
                            <select>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Status</label>
                            <select>
                                <option>Available</option>
                                <option>Unavilable</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Rental Rate</label>
                            <input type="number" placeholder="Rate"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4 offset-2">
                            <button type="submit" className="btn btn-dark">Submit Car Information</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}