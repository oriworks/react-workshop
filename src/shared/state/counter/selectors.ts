import { get } from 'lodash'

import { AppState } from '../types'

import { State } from './types'
import { getters } from './reducer'

const getFromState = (state: AppState): State => get(state, 'counter')

export const getCounter = (state: AppState): State => getters.counter(getFromState(state))

