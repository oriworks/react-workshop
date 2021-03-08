import { Reducer as ReduxReducer, Store } from 'redux'
import { ThunkDispatch } from 'redux-thunk';

import { Actions as CounterActions, State as CounterState } from './counter/types';

const DEFAULT_ACTION_TYPE = 'DEFAULT_ACTION_TYPE'
interface DefaultAction { type: typeof DEFAULT_ACTION_TYPE }

export const defaultAction: DefaultAction = { type: DEFAULT_ACTION_TYPE }

export type Actions = DefaultAction | CounterActions
export type Reducer<R> = ReduxReducer<R, Actions>

export interface AppState {
    counter: CounterState
}
export type AppReducer = Reducer<AppState>

export type Dispatch<E> = ThunkDispatch<AppState, E, Actions>
export type ConfigureStore<E = {}> = Store<AppState> & { dispatch: Dispatch<E> }