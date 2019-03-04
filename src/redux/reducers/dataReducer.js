import {
  Map as map, // eslint-disable-line no-unused-vars
} from 'immutable'

import { FETCH_DATA, ADD_DATA } from '../actions/types'
import initialState from './initialState'

export default (state = initialState.get('data'), action) => {
  switch (action.type) {
    case FETCH_DATA:
      // return action.payload
      return state
    case ADD_DATA:
      return state + action.payload
    default:
      return state
  }
}
