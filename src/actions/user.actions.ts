/**
 * This component should be a button on the navbar once a user logs in.
 * The component should render on the full screen/display. On the left side the user's
 * information is on display. On the right, their rental history is on display.
 * So this would be 2 separate "tables" adjacent to each other.
 * Next to each rental item should be a button that deletes the rental.
 * 
 * NOTE! Users cannot edit their rentals, this would cause a massive cascade in the database.
 * Maybe as a stretch goal we can implement that and manage the cascade, but not now.
 */

export const userTypes = { // make object of action types for reducer to understand later
    USER_GET_RESOLVED: 'USER_GET_RESOLVED', // get user info for left display
    USER_PAGE_REQUEST: 'USER_PAGE_REQUEST', // change rental page
    USER_UPD8_REQUEST: 'USER_UPD8_REQUEST', // change user information
    DELETE_RENTAL: 'DELETE_RENTAL' // Delete a rental
};

export const userGetResolved = // specific action
    (id: number) => (dispatch: any) => { //pass in needed info, then it dispatches
        dispatch({
            payload: { // send id for updating, should be on token client side
                id
            },
            type: userTypes.USER_GET_RESOLVED
        });
    }

export const userPageRequest =
    (page: number) => (dispatch: any) => { // again, call function, calls dispatch, sends payload and type
        dispatch({
            payload: {
                page // when user clicks an arrow or inputs a number, get that value of pagination
            },
            type: userTypes.USER_PAGE_REQUEST
        });
    }

export const userUpdate =
    (username: string, password: string, firstname: string, lastname: string, email: string, phone: string, driverslicense: string, roleid: 0) =>
        (dispatch: any) => {
            dispatch({
                payload: {
                    username, password, firstname, lastname, email, phone, driverslicense, roleid
                },
                type: userTypes.USER_UPD8_REQUEST
            });
        }

export const deleteRental =
    (id: number) => (dispatch: any) => { // button is associated with rental transaction's id
        dispatch({
            payload: {
                id
            },
            type: userTypes.DELETE_RENTAL
        });
    }

export const inputUpdate = (inputValue: string) => (dispatch: any) => { // as previous
    dispatch({
        payload: {
            inputValue
        },
        type: pokeTypes.INPUT_UPDATE
    });
}