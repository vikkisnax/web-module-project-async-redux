import { useReducer } from "react";
import {initialState, reducer} from "../reducers/index"

export const SEARCH_JOKE = 'SEARCH_JOKE'; //action type


export const searchJoke = (joke) => { // action
    console.log("actions:", joke);
    return {
        type: SEARCH_JOKE,
        payload: joke
    }

}