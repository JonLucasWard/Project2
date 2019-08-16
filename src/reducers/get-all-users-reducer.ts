import { getAllUsersTypes } from '../actions/user-actions/get-all-users-actions';

const initialState = {
    userid: 0,
    driverlicense: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    phonenumber: "",
    role: 1,
    username: "",
    loadingAllUsers: false,
    users: {}
};

export const getAllUsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case getAllUsersTypes.GET_ALL_USERS_SUBMIT_REQUEST:
            return {
                ...state,
                loadingAllUsers: true
            }
        case getAllUsersTypes.GET_ALL_USERS_SEARCH_RESOLVED:
            return {
                ...state,
                userid: action.payload.userid,
                driverlicense: action.payload.driverlicense,
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                password: action.payload.password,
                phonenumber: action.payload.phonenumber,
                role: action.payload.role,
                username: action.payload.username,
                loadingAllUsers: true,
                users: []
            }
        default: break;
    }
    return initialState;
}