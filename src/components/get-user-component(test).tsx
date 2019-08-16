import React from 'react';
import Axios from 'axios';
import { IState, GetUserState } from '../reducers';
import { getUserInputUpdate, getUserSubmitRequest, getUserSearchResolved } from '../actions/user-actions/get-user-by-id-actions';
import { connect } from 'react-redux';

export interface GetUserProps {
    user: GetUserState;
    getUserInputUpdate: (inputValue: number) => void;
    getUserSubmitRequest: () => void;
    getUserSearchResolved: (
        userid: number, 
        driverlicense: string, 
        email: string, 
        firstname: string, 
        lastname: string, 
        password: string, 
        phonenumber: string, 
        role: number, 
        username: string
        ) => void;
}

export class GetUserByIdTestComponent extends React.Component<GetUserProps> {
    constructor(props: any) {
        super(props);
    }

    handleInputChange(event: any) {
        console.log('input checking');
        const value = event.target.value;
        this.props.getUserInputUpdate(value);
    }

    handleSubmit() {
        console.log('submit clicked');
        const url = `https://localhost:8080/users/${this.props.getUserInputUpdate}`;
        this.props.getUserSubmitRequest();
        Axios.get(url).then(payload => {
            const userid = payload.data.userid;
            const driverlicense = payload.data.driverlicense;
            const email = payload.data.email;
            const firstname = payload.data.firstname;
            const lastname = payload.data.lastname;
            const password = payload.data.password;
            const phonenumber = payload.data.phonenumber;
            const role = payload.data.role;
            const username = payload.data.username;

            this.props.getUserSearchResolved(userid,driverlicense,email,firstname,lastname,password,phonenumber,role,username);
        })
    }
    render() {
        return(
            <div>
                <input type="number" onChange={(event) => this.handleInputChange(event)} />
                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state:IState) => ({
    user: state.getUser
});

const mapDispatchToProps = {
    getUserInputUpdate: getUserInputUpdate,
    getUserSubmitRequest: getUserSubmitRequest,
    getUserSearchResolved: getUserSearchResolved
};

export default connect(mapStateToProps, mapDispatchToProps)(GetUserByIdTestComponent)