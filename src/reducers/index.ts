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
    search: ISearchState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
    search: searchReducer
})