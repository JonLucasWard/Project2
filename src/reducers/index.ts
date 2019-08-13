import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { pokeReducer } from "./poke.reducer";
import { Car } from '../models/AppModels';
import { getAllCarsReducer } from "./car-reducer";
import { User } from '../models/AppModels';
import { userReducer } from "./user-reducer";
import { Rental } from '../models/AppModels';
import { getAllRentalsReducer } from "./rental-reducer";


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
    rentalComponent: IManageRentalState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
    carComponent: getAllCarsReducer,
    userComponent: userReducer,
    rentalComponent: getAllRentalsReducer
})