import React from 'react';
import { Rental } from '../../models/AppModels';
import { RentalComponent } from './rental.component';

interface IRentalListComponentProps {
    rentals: Rental[]
    deleteRental: (id: number) => void;
}

export class RentalListComponent extends React.Component<IRentalListComponentProps, any> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    render() {
        const rents = this.props.rentals.map(rental => (<RentalComponent key={rental.id} rental={rental} deleter={this.props.deleteRental} />))
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