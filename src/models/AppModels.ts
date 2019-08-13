<<<<<<< HEAD
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
=======
import * as Models from './App-models';

export var MockUser = <Models.User>{
    id: 1, username: 'JonWard', password: 'password',
    firstname: 'Jon', lastname: 'Ward', email: '@email.com',
    phone: '111-111-1111', driverslicenseno: '11111111',
    roleid: 1
};

export var MockUser2 = <Models.User>{
    id: 1, 
    username: 'JulienClarke', 
    password: 'password1',
    firstname: 'Julien', 
    lastname: 'Clarke', 
    email: 'JC@email.com',
    phone: '211-111-1111', 
    driverslicenseno: '21111111',
    roleid: 2
};

export var MockRental = <Models.Rental>{
    id: 1, userid: 1, carid: 1,
    daterented: 'Today', expectedreturn: 'Tomorrow',
    description: 'A pretty car', approved: true
};

export var MockRental2 = <Models.Rental>{
    id: 2, userid: 2, carid: 2,
    daterented: 'Today2', expectedreturn: 'Tomorrow2',
    description: 'A pretty car2', approved: false
};

export var MockCar = <Models.Car>{
    carid: 1, brand: 'Honda', model: 'Newest',
    makeyear: '2019', occupancy: 4, transmission: 'Good',
    mileage: 123, color: 'Black', ac: true, statusid: 1,
    rate: 53.50, typeid: 1
};

export var MockCar2 = <Models.Car>{
    carid: 2, brand: 'Honda2', model: 'Newest2',
    makeyear: '20192', occupancy: 5, transmission: 'Good2', mileage: 1232,
    color: 'Black2', ac: false, statusid: 2, rate: 53.52, typeid: 2
};

export var MockPayInfo = <Models.PayInfo>{
    id: 1,
    userid: 1,
    transactionid: 1,
    nameoncard: 'Jonathan Ward',
    cardno: '11111111111',
    expdate: '2020-10',
    cvv: 777,
    amount: 100
>>>>>>> 1531ae7e661b9a7ff0af37a230f0e6cec38bae06
};