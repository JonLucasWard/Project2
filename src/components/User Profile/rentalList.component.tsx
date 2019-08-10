import React from 'react';
import Axios from 'axios';
import { Rental } from '../../models/AppModels';
import { RentalComponent } from './rental.component';

interface IRentalListComponentProps {
    rentals: Rental[]
}

export class RentalListComponent extends React.Component<IRentalListComponentProps, any> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    render() {
        const rents = this.props.rentals.map(rental => (<RentalComponent key={rental.id} rental={rental} />))
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Car Id</th>
                        <th>Date Rented</th>
                        <th>Return By</th>
                        <th>Description</th>
                        <th>Approved</th>
                    </tr>
                </thead>
                <tbody>
                    {rents}
                </tbody>
            </table>
        );
    }
}