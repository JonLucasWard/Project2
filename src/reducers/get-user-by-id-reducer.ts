import { getUserTypes } from '../actions/user-actions/get-user-by-id-actions';

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
    inputValue: 0,
    loadingNewUser: false
};

export const getUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case getUserTypes.GET_USER_INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        case getUserTypes.GET_USER_SUBMIT_REQUEST:
            return {
                ...state,
                loadingNewUser: true
            }
        case getUserTypes.GET_USER_SEARCH_RESOLVED:
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
                loadingNewUser: false
            }
        default: break;
    }
    return initialState;
}