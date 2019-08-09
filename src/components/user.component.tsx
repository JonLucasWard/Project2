import React from 'react';
import Axios from 'axios';
import { IState, IUserState } from '../reducers';
import { userGetResolved, userPageRequest, userUpdate, deleteRental } from '../actions/user.actions';
import { connect } from 'react-redux';

export interface IUserProps { // Properties that sub components can inherit
    user: IUserState; //accept interface from reducers

    // Action properties from the dispatcher, imported from actions
    // It is not necessary to return any value when this is called, the state update is what we want
    userGetResolved: (id: number) => void;
    userPageRequest: (page: number) => void;
    userUpdate: (inputValue: string) => void;
    deleteRental: (id: number) => void;
}

export class UserComponent extends React.Component<IUserProps> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    render() {
        return (
            <div>
                <div id="user-display"/* div for User's personal information*/>
                    <h1>User Profile</h1>
                </div>
                <div id="rent-display" /* div for rental history*/>
                    <h1>Rented Cars</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({ // define mapStateToProps function, making userProfile state
    user: state.userProfile
});

const mapDispatchToProps = { // define mapDispatchToProps
    userGetResolved: userGetResolved,
    userPageRequest: userPageRequest,
    userUpdate: userUpdate,
    deleteRental: deleteRental
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);