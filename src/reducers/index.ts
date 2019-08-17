// Need to match data structures, but should interfaces here JUST be for components????
// How would that even look???
import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { pokeReducer } from "./poke.reducer";
import { Car, PayInfo } from '../models/AppModels';
import { User } from '../models/AppModels';
import { user0Reducer } from "./user.reducer";
import { Rental } from '../models/AppModels';
import { rentalReducer } from "./rental-reducer";
import { getUserReducer } from '../reducers/get-user-by-id-reducer';
import { getAllUsersReducer } from '../reducers/get-all-users-reducer';
import { getAllAvailableCarsReducer } from '../reducers/get-all-available-cars-reducer';
import { getAllCarsReducer } from '../reducers/get-all-cars-reducer';
import { carsReducer } from './car-reducer';
import { getAllRentalsReducer } from './get-all-rentals-reducer';
import { getRentalByUserReducer } from "./get-rental-by-user-reducer";
import userComponent from "../components/User Profile/user.component";
import { checkoutReducer } from '../reducers/checkout-reducer';

export interface IUserState { // state of user profile component
    thisUser: User, //user's info
    rentals: Rental[], //list of user's rentals
    page: number //current page of rental list we're on, maybe should just be a state to the component alone
}

//general rental search state... list of current 10 available rentals and page the user is on???
//managers should have something similar to user, except their state will include data of the current user
//they are editing, basically inheriting a new IUserState but for their target. A list of users. And a list of all rentals

// import { searchCarReducer } from '../reducers/search-rentals-reducer';

export interface CheckoutState {
    payinfo: PayInfo[]
}
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
    userProfile: IUserState,
    allCarsComponent: GetAllCarsState,
    userComponent: IUserState,
    rentalComponent: IManageRentalState,
    getUser: GetUserState,
    getAllUsers: GetAllUsersState,
    getAllAvailableCars: GetAllAvailableCarsState,
    getAllCars: GetAllCarsState,
    getAllRentals: GetAllRentalState,
    getRentalByUser: GetRentalByUserState,
    checkout: CheckoutState
    // searchCars: SearchRentalState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
    // carComponent: carsReducer,
    userProfile: user0Reducer,
    allCarsComponent: getAllCarsReducer,
    userComponent: user0Reducer,
    rentalComponent: rentalReducer,
    getUser: getUserReducer,
    getAllUsers: getAllUsersReducer,
    getAllAvailableCars: getAllAvailableCarsReducer,
    getAllCars: getAllCarsReducer,
    getAllRentals: getAllRentalsReducer,
    getRentalByUser: getRentalByUserReducer,
    checkout: checkoutReducer
    // searchCars: searchCarReducer
})