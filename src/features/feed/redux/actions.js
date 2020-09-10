import {
  GET_FEED_DATA_BEGIN,
  GET_FEED_DATA_ERROR,
  GET_FEED_DATA_SUCCESS,
  MARK_AS_FAVORITE_BEGIN,
  MARK_AS_FAVORITE_SUCCESS,
  MARK_AS_FAVORITE_ERROR,
} from "./types";

export function getFeedDataBegin() {
  return {
    type: GET_FEED_DATA_BEGIN,
  }
}

export function getFeedDataSuccess(data) {
  return {
    type: GET_FEED_DATA_SUCCESS,
    payload: data
  }
}

export function getFeedDataError(error) {
  return {
    type: GET_FEED_DATA_ERROR,
    payload: error
  }
}

export function markAsFavoriteBegin(id, value) {
  return {
    type: MARK_AS_FAVORITE_BEGIN,
    payload: {
      id,
      value
    }
  }
}

export function markAsFavoriteSuccess(data) {
  return {
    type: MARK_AS_FAVORITE_SUCCESS,
    payload: data
  }
}

export function markAsFavoriteError(error) {
  return {
    type: MARK_AS_FAVORITE_ERROR,
    payload: error
  }
}