// Need to match data structures, but should interfaces here JUST be for components????
// How would that even look???

import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { pokeReducer } from "./poke.reducer";
import { searchReducer } from "./search.reducer";
import { Rental } from "../models/App-models"

export interface ISearchState {
    page: number
    rentals: Rental[]
};
import { User, Rental, Car } from "../models/AppModels";
import { user0Reducer } from "./user.reducer";
import { userReducer } from "./user-reducer";
import { getAllCarsReducer } from "./car-reducer";
import { getAllRentalsReducer } from "./rental-reducer";

export interface IUserState { // state of user profile component
    thisUser: User, //user's info
    rentals: Rental[], //list of user's rentals
    page: number //current page of rental list we're on, maybe should just be a state to the component alone
}

//general rental search state... list of current 10 available rentals and page the user is on???
//managers should have something similar to user, except their state will include data of the current user
//they are editing, basically inheriting a new IUserState but for their target. A list of users. And a list of all rentals

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
    amount: number
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
<<<<<<< HEAD
    search: ISearchState
=======
    userProfile: IUserState,
    carComponent: IManageCarState,
    userComponent: IManagerUserState,
    rentalComponent: IManageRentalState
>>>>>>> 8130525a7d126871fc172914dde86391b0f73279
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
<<<<<<< HEAD
    search: searchReducer
=======
    userProfile: user0Reducer,
    carComponent: getAllCarsReducer,
    userComponent: userReducer,
    rentalComponent: getAllRentalsReducer
>>>>>>> 8130525a7d126871fc172914dde86391b0f73279
})