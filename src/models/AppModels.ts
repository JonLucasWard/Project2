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
    roleid: number;
};

export interface Rental {
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
    color: string,
    ac: boolean,
    statusid: number,
    rate: number,
    typeid: number
};

export interface PayInfo {
    id: number,
    userid: number,
    transactionid: number,
    nameoncard: string,
    cardno: string,
    expdate: string,
    cvv: number,
    amount: number
};