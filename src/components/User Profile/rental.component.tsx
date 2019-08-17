import React from 'react';
import { Rental } from '../../models/App-models'

interface IRentalComponentProps {
    rental: Rental;
    deleter: any;
}

export class RentalComponent extends React.Component<IRentalComponentProps, any> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    deleteRental = () => { // when clicked, call delete value to dispatcher
        this.props.deleter(this.props.rental.id);
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
                <td><button onClick={() => this.deleteRental()}>Delete</button></td>
            </tr>
        );
    }
}