import React from 'react';
import { ManagerTabsComponent } from './manager-tabs-component';
import { Link } from 'react-router-dom';

export class CarInformationComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ManagerTabsComponent />
                <h1>Car Information</h1>
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
                    </div>
                </form>
            </div>
        )
    }
}