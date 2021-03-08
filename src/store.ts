import { Dispatch } from 'react'
import { applyMiddleware, createStore, PreloadedState } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { Actions } from './shared/state/counter/types'
import { AppReducer, AppState, ConfigureStore } from './shared/state/types'
import { composeWithDevTools } from 'redux-devtools-extension'


export const configureStore = <E = {}>(reducer: AppReducer, preloadedState: PreloadedState<AppState>, extraArgument: E):  ConfigureStore<E> => {
    const thunkMiddleware: ThunkMiddleware<AppState, Actions, E> = thunk.withExtraArgument<E>(extraArgument)
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware<Dispatch<E>, AppState>(...middlewares)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)
  
    const store = createStore(reducer, preloadedState, composedEnhancers)
  
    return store
  }