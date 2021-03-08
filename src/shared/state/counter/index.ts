import reducer, { initialState } from './reducer'
import * as selectors from './selectors'
import * as actions from './actions'
import { ActionTypes } from './types'

export default reducer

export {
  actions,
  ActionTypes,
  reducer,
  selectors,
  initialState
}
