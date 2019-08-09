import { IUserState } from ".";
import { userTypes } from "../actions/user.actions";
import { User, Rental } from "../models/AppModels";

// Defining initial state of clicker
const initialState: IUserState = {
    thisUser: {
        id: 0,
        username: 'none',
        firstname: 'none',
        lastname: 'none',
        password: 'none', // displays "Protected" when logged in, can only change password, not view
        email: 'none',
        driverslicenseno: 'none',
        phone: 'none',
        roleid: 0
    }, //axios get this user info
    rentals: [{ id: 0, userid: 0, carid: 0, daterented: 'Today', expectedreturn: 'Today', description: 'hello', approved: false }], //axios get this user's rentals
    page: 1 //display first page of rentals
};


/* Define the reducer for the clicker, The reducer will determine which action has taken place
 and if it needs to, it will return a new state if the action requires it. If not, we will return 
 the current state. Usually, we will switch on an action, and capture the various actions
 that we need to handle */
export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userTypes.USER_GET_RESOLVED:
            return {
                ...state,
                thisUser: {
                    id: 0,
                    username: 'none',
                    firstname: 'none',
                    lastname: 'none',
                    password: 'none', // displays "Protected" when logged in, can only change password, not view
                    email: 'none',
                    driverslicenseno: 'none',
                    phone: 'none',
                    roleid: 0
                }, //axios get this user info... I guess I don't really need this do I?
                rentals: ['beep'] //axios get rental list 
            }
        case userTypes.USER_PAGE_REQUEST:
            return {
                ...state,
                page: 1// Uh... depends what the user put in...
            }
        case userTypes.USER_UPD8_REQUEST:
            return {
                ...state,
                thisUser: {
                    id: 0,
                    username: 'none',
                    firstname: 'none',
                    lastname: 'none',
                    password: 'none', // displays "Protected" when logged in, can only change password, not view
                    email: 'none',
                    driverslicenseno: 'none',
                    phone: 'none',
                    roleid: 0
                }, //we are submitted changed info, then getting it back from the DB
            }
        case userTypes.DELETE_RENTAL:
            return {
                ...state,
                rentals: ['swag'] //list should have changed
            }
        default: break;
    }
    return state;
}