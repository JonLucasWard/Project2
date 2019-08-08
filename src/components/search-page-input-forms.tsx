import React from 'react';
import Calendar from 'react-calendar';
import backgroundImage from '../assets/darkness.png';

export class InputRentalFormComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

       
    }
    handleSubmit() {
        alert("Searching for cars available");
    }

    render() {
        return (
            <div className="App">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="date-label">Start Date/Time: </label>
                            <br></br>
                            <Calendar />
                            <label>Choose Pick-Up TIme</label>
                            <select className="select-time">
                                <option>8:00am</option>
                                <option>9:00am</option>
                                <option>10:00am</option>
                                <option>11:00am</option>
                                <option>12:00am</option>
                                <option>1:00pm</option>
                                <option>2:00pm</option>
                                <option>3:00pm</option>
                                <option>4:00pm</option>
                                <option>5:00pm</option>
                                <option>6:00pm</option>
                                <option>7:00pm</option>
                                <option>8:00pm</option>
                                <option>9:00pm</option>
                                <option>10:00pm</option>
                                <option>11:00pm</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4 offset-2">
                            <label className="date-label">End Date/TIme</label>
                            <br></br>
                            <Calendar />
                            <label>Choose Drop-off Time: </label><select className="select-time">
                            <option>8:00am</option>
                                <option>9:00am</option>
                                <option>10:00am</option>
                                <option>11:00am</option>
                                <option>12:00am</option>
                                <option>1:00pm</option>
                                <option>2:00pm</option>
                                <option>3:00pm</option>
                                <option>4:00pm</option>
                                <option>5:00pm</option>
                                <option>6:00pm</option>
                                <option>7:00pm</option>
                                <option>8:00pm</option>
                                <option>9:00pm</option>
                                <option>10:00pm</option>
                                <option>11:00pm</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Select a Car Type</label>
                            <select>
                                <option>Discount</option>
                                <option>Standard</option>
                                <option>Premium</option>
                                <option>Luxury</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label>AC</label>
                            <select>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Occupancy</label>
                            <select>
                                <option>4</option>
                                <option>6</option>
                                <option>8</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8 offset-4">
                            <div className="center-btn">
                            <button type="submit"  onClick = {() => this.handleSubmit()} className="btn btn-dark">Search for a Car</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}