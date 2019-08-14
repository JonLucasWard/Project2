import { IManagerUserState } from '../reducers/index';
import  { usersTypes } from '../actions/user-actions';
import { MockUser, MockUser2 } from '../models/dummyData';

const initialState: IManagerUserState = {
    users: [MockUser, MockUser2],
    page: 1
};

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case usersTypes.USERS_GET_RESOLVED:
            return {
                ...state,
                users: [MockUser,MockUser2]
            }
        case usersTypes.USER_BY_ID_RESOLVED:
            return {
                ...state,
                users: [MockUser]
            }
        case usersTypes.USERS_UPDATE_REQUEST:
            return {
                ...state, 
                users: action.payload.user
            }
        default: break;
    }
    return state;
}


