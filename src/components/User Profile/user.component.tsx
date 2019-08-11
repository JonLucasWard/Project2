import React from 'react';
import { IState, IUserState } from '../../reducers';
import { userGetResolved, userPageRequest, userUpdate, deleteRental } from '../../actions/user.actions';
import { connect } from 'react-redux';
import { ProfileComponent } from './profile.component';
import { RentalListComponent } from './rentalList.component';
import { Pagination } from 'reactstrap';
import PaginationComponent from './pagination.component';

export interface IUserProps { // Properties that sub components can inherit
    user: IUserState; //accept interface from reducers

    // Action properties from the dispatcher, imported from actions
    // It is not necessary to return any value when this is called, the state update is what we want
    userGetResolved: (id: number) => void;
    userPageRequest: (page: number) => void;
    userUpdate: (user: object) => void;
    deleteRental: (id: number) => void;
}

export class UserComponent extends React.Component<IUserProps> {
    constructor(props: any) { // create own properties
        super(props); // inherit React component properties
    }

    submitting = (user: object) => {
        this.props.userUpdate(user);
    }

    deleter = (id: number) => {
        this.props.deleteRental(id);
    }

    render() {
        return (
            <div>
                <div id="user-display"/* div for User's personal information*/>
                    <h1>User Profile</h1>
                    <ProfileComponent user={this.props.user.thisUser} submitting={this.submitting} />
                </div>
                <div id="rent-display" /* div for rental history*/>
                    <h1>Rented Cars</h1>
                    <RentalListComponent rentals={this.props.user.rentals} deleteRental={this.deleter} />
                    <PaginationComponent pagination={this.props.user.page} />
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