import {
  FETCH_FEED_DATA_BEGIN,
  FETCH_FEED_DATA_SUCCESS,
  FETCH_FEED_DATA_ERROR,
  UP_VOTE_BEGIN,
  UP_VOTE_SUCCESS,
  UP_VOTE_ERROR,
} from './types'

const INITIAL_STATE = {
  loading: false,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FEED_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case FETCH_FEED_DATA_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.payload
      }
    case FETCH_FEED_DATA_ERROR:
      return {
        ...state,
        loading: false
      }
    case UP_VOTE_BEGIN:
      return {
        ...state,
      }
    case UP_VOTE_SUCCESS:
      return {
        ...state,
      }
    case UP_VOTE_ERROR:
      return {
        ...state,
      }
    default:
      return state
  }
}