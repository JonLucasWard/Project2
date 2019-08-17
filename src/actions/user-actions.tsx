import { User } from '../models/App-models';

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
        }

export const usersUpdateRequest =
    (user: User) =>
        (dispatch: any) => {
            dispatch({
                payload: { user },
                type: usersTypes.USERS_UPDATE_REQUEST
            });
        }

export const userByIdResolved =
    (id: number) =>
        (dispatch: any) => {
            dispatch({
                payload: id,
                type: usersTypes.USER_BY_ID_RESOLVED
            });
        }

