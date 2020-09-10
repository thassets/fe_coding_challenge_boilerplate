import {
  getFeedDataBegin,
  getFeedDataSuccess,
  getFeedDataError,
  markAsFavoriteBegin,
  markAsFavoriteSuccess,
  markAsFavoriteError,
} from './actions'
import {
  getFeedDataRequest,
  postUpVoteRequest
} from "../network"

export const getFeedData = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(getFeedDataBegin())
    getFeedDataRequest()
      .then((response) => {
        const { data } = response
        dispatch(getFeedDataSuccess(data))
        resolve(response)
      }).catch((error) => {
        console.warn(error)
        dispatch(getFeedDataError(error))
        reject(error)
      })
  })
}

export const markAsFavorite = (imageId, value = 1) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(markAsFavoriteBegin(imageId, value))
    postUpVoteRequest(imageId, value)
      .then((response) => {
        const { data } = response
        dispatch(markAsFavoriteSuccess(data))
        resolve(response)
      }).catch((error) => {
        console.warn(error)
        dispatch(markAsFavoriteError(error))
        reject(error)
      })
  })
}