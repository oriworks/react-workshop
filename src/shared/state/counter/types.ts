export enum ActionTypes {
    INCREMENT = 'INCREMENT'
}

interface Increment {
    type: ActionTypes.INCREMENT
}

export type Actions = Increment

export type State = number;