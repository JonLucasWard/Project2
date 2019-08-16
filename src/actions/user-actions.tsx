import { User } from '../models/AppModels';

export const usersTypes = {
    USERS_GET_RESOLVED: 'USERS_GET_RESOLVED',
    USERS_PAGE_REQUEST: 'USERS_PAGE_REQUEST',
    USERS_UPDATE_REQUEST: 'USERS_UPDATE_REQUEST',
    USER_BY_ID_RESOLVED: 'USER_BY_ID_RESOLVED'
};

export const usersGetResolved = 
    (user: User) => 
        (dispatch: any) => {
            dispatch({
                payload: { user },
                type: usersTypes.USERS_GET_RESOLVED
            });
            alert("Getting Users!");
        }

export const usersUpdateRequest = 
    (user: User) =>
        (dispatch: any) => {
            dispatch({
                payload: { user },
                type: usersTypes.USERS_UPDATE_REQUEST
            });
            alert(`Updated User: ${user.id}`)
        }

export const userByIdResolved = 
        (id: number) => 
            (dispatch: any) => {
                dispatch({
                    payload: id,
                    type: usersTypes.USER_BY_ID_RESOLVED
                });
                alert(`Retrieved User with ID number of ${id}`)
            }

