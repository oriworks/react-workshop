import { combineReducers } from 'redux'

import { AppReducer, AppState } from './types'

import counterReducer, { initialState as counterInitialState } from './counter'

export const appReducer: AppReducer = combineReducers({
  counter: counterReducer
})

export const appInitialState: AppState = {
  counter: counterInitialState
}
