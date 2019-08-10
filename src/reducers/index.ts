// Need to match data structures, but should interfaces here JUST be for components????
// How would that even look???

import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { pokeReducer } from "./poke.reducer";
import { useImperativeHandle } from "react";
import { User, Rental, } from "../models/AppModels";
import { userReducer } from "./user.reducer";

export interface IUserState { // state of user profile component
    thisUser: User, //user's info
    rentals: Rental[], //list of user's rentals
    page: number, //current page of rental list we're on
    inputValues: any //array of different input fields
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
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
    userProfile: userReducer,
})