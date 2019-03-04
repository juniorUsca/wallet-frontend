import {
  FETCH_DATA,
  ADD_DATA,
} from './types'

const fetchData = () => async (dispatch) => {
  dispatch({
    type: FETCH_DATA,
    payload: [],
  })
}

const addData = () => async (dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: 1,
  })
}

export default {
  fetchData,
  addData,
}
