import React from 'react';
import { Form, Col } from 'react-bootstrap'
import { MockRental, MockRental2 } from '../../models/dummyData'
import { PayInfo } from '../../models/AppModels';

interface CheckoutComponentProps {
    payinfo: PayInfo,
    submitting: any
}


export class CheckoutComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            amount: 0
        }
    }

    render() {
        return (
            <div>
                <div className="checkout-background">
                <div className="checkout-form">
                    <label className="white-label"></label><output></output>
                    <div className="checkout-container">
                        <form>
                        <div className="form-row">
                        <div className="form-group col-md-12">
                            <h5 id="white-heading">Fill out the billing info or you aint getting your car</h5>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label className="white-label">Name on Card</label>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="text" placeholder="Name On Card" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="white-label">Card Number</label>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="text" placeholder="Card Number" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="white-label">Expiration Date</label>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="text" placeholder="XX-XX-XXXX" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="white-label">CVV</label>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="text" placeholder="CVV" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <button className="btn btn-dark" type="submit">Submit</button>
                        </div>
                    </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}