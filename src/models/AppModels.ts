/**
 * Data objects to match our database objects. Not unique to any component, but still
 * used frequently between many components. 
 * Import from here if you need to access a given model.
 */

export interface User {
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    driverslicenseno: string
};

export interface Rental { // MIGHT CHANGE
    id: number,
    userid: number,
    carid: number,
    daterented: string,
    expectedreturn: string,
    description: string,
    approved: boolean
};

export interface Car {
    carid: number,
    brand: string,
    model: string,
    makeyear: string,
    occupancy: number,
    transmission: string,
    mileage: number,
    color: number,
    ac: boolean,
    statusid: number,
    rate: number,
    typeid: number
};

export interface PayInfo { // I'M GUESSING
    id: number,
    userid: number,
    creditnumber: number
};