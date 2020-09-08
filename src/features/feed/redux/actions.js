import {
  FETCH_FEED_DATA_BEGIN,
  FETCH_FEED_DATA_ERROR,
  FETCH_FEED_DATA_SUCCESS,
  UP_VOTE_BEGIN,
  UP_VOTE_SUCCESS,
  UP_VOTE_ERROR,
} from "./types";

export function fetchFeedDataBegin() {
  return {
    type: FETCH_FEED_DATA_BEGIN,
  }
}

export function fetchFeedDataSuccess(data) {
  return {
    type: FETCH_FEED_DATA_SUCCESS,
    payload: data
  }
}

export function fetchFeedDataError(error) {
  return {
    type: FETCH_FEED_DATA_ERROR,
    payload: error
  }
}

export function upVoteBegin(id) {
  return {
    type: UP_VOTE_BEGIN,
    payload: id
  }
}

export function upVoteSuccess(data) {
  return {
    type: UP_VOTE_SUCCESS,
    payload: data
  }
}

export function upVoteError(error) {
  return {
    type: UP_VOTE_ERROR,
    payload: error
  }
}