import React from 'react';
import { Rental } from '../../models/AppModels'

interface IRentalComponentProps {
    rental: Rental;
}

export class RentalComponent extends React.Component<IRentalComponentProps, any> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    render() {
        return (
            <tr key={this.props.rental.id}>
                <td>{this.props.rental.id}</td>
                <td>{this.props.rental.userid}</td>
                <td>{this.props.rental.carid}</td>
                <td>{this.props.rental.daterented}</td>
                <td>{this.props.rental.expectedreturn}</td>
                <td>{this.props.rental.description}</td>
                <td>{this.props.rental.approved}</td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}