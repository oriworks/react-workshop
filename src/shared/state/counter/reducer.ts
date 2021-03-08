import { Reducer, Actions, defaultAction } from "../types";

import { ActionTypes, State } from "./types";

export const initialState: State = 0;

const counter: Reducer<number> = (state: number = initialState, action: Actions = defaultAction): number => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state + 1;
        default:
            return state;
    }
}

export const getters = {
    counter: (state: State) => state,
}

export default counter;