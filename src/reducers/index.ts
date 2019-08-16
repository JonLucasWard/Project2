import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { pokeReducer } from "./poke.reducer";
import { Car } from '../models/AppModels';
import { User } from '../models/AppModels';
import { userReducer } from "./user-reducer";
import { Rental } from '../models/AppModels';
import { rentalReducer } from "./rental-reducer";
import { getUserReducer } from '../reducers/get-user-by-id-reducer';
import { getAllUsersReducer } from '../reducers/get-all-users-reducer';
import { getAllAvailableCarsReducer } from '../reducers/get-all-available-cars-reducer';
import { getAllCarsReducer } from '../reducers/get-all-cars-reducer';
import { carsReducer } from './car-reducer';
import { getAllRentalsReducer } from './get-all-rentals-reducer';
import { getRentalByUserReducer } from "./get-rental-by-user-reducer";


// import { searchCarReducer } from '../reducers/search-rentals-reducer';

// test interface of GetAllUsersComponent
export interface GetUserState {
    userid: number;
    driverlicense: string;
    email: string; 
    firstname: string; 
    lastname: string; 
    password: string; 
    phonenumber: string; 
    role: number; 
    username: string;
    inputValue: number;
    loadingNewUser: boolean;
}

export interface GetRentalByUserState {
    transactionid: number,
    userid: number,
    carid: number,
    daterented: string,
    expectedreturn: string,
    approved: boolean,
    inputValue: number,
    loadingRentalByUser: boolean, 
}

export interface GetAllRentalState {
    transactionid: number,
    userid: number,
    carid: number,
    daterented: string,
    expectedreturn: string,
    approved: boolean,
    loadingAllRentals: boolean, 
    rentals: {}
}
export interface GetAllUsersState {
    userid: number;
    driverlicense: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    phonenumber: string,
    role: number,
    username: string,
    loadingAllUsers: boolean,
    users: {}
}

export interface GetAllAvailableCarsState {
    carid: number,
    brand: string,
    model: string, 
    makeYear: string,
    occupancy: number,
    transmission: string,
    mileage: number,
    color: string,
    ac: boolean,
    statusid: number,
    rate: number,
    typeid: number,
    inputValue: number,   
    loadingAllAvailableCars: boolean,
    availableCars: {}
}
export interface SearchRentalState {
    carid: number,
    brand: string,
    model: string, 
    makeYear: string,
    occupancy: number,
    transmission: boolean,
    mileage: number,
    color: string,
    ac: boolean,
    statusid: number,
    rate: number,
    typeid: number
}

export interface GetAllCarsState {
    carid: number,
    brand: string,
    model: string, 
    makeYear: string,
    occupancy: number,
    transmission: string,
    mileage: number,
    color: string,
    ac: boolean,
    statusid: number,
    rate: number,
    typeid: number,
    loadingAllCars: boolean, 
    allCars: {}
}

export interface IManageCarState {
    cars: Car[],
    page: number
}
export interface IManagerUserState {
    users: User[],
    page: number
}

export interface IManageRentalState {
    rentals: Rental[],
    page: number
}
export interface IClickerState { // set state interface of clicker
    clicks: number
};

export interface IPokeState { // set state interface of poke
    name: string;
    id: number;
    spriteUrl: string;
    types: string[];
    inputValue: string; // Do we consider the current state of input as application state?
    loadingNewPoke: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    clicker: IClickerState,
    poke: IPokeState,
    carComponent: IManageCarState,
    userComponent: IManagerUserState,
    rentalComponent: IManageRentalState,
    getUser: GetUserState,
    getAllUsers: GetAllUsersState,
    getAllAvailableCars: GetAllAvailableCarsState,
    getAllCars: GetAllCarsState,
    getAllRentals: GetAllRentalState,
    getRentalByUser: GetRentalByUserState
    // searchCars: SearchRentalState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
    carComponent: carsReducer,
    userComponent: userReducer,
    rentalComponent: rentalReducer,
    getUser: getUserReducer,
    getAllUsers: getAllUsersReducer,
    getAllAvailableCars: getAllAvailableCarsReducer,
    getAllCars: getAllCarsReducer,
    getAllRentals: getAllRentalsReducer,
    getRentalByUser: getRentalByUserReducer
    // searchCars: searchCarReducer
})