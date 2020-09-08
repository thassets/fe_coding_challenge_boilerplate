import axios from "axios"
import {
  fetchFeedDataBegin,
  fetchFeedDataSuccess,
  fetchFeedDataError,
  upVoteBegin,
  upVoteSuccess,
  upVoteError,
} from './actions'

const breedIds = ''

export const fetchFeedData = (limit = 50, page = 0) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(fetchFeedDataBegin())
    axios(`/images/search?limit=${limit}&sub_id=tradehoundsbot&page=${page}&order=Desc&include_vote=1&include_favourite=1&has_breeds=true`)
      .then((response) => {
        const { data } = response
        dispatch(fetchFeedDataSuccess(data))
        resolve(response)
      }).catch((error) => {
        console.warn(error)
        dispatch(fetchFeedDataError(error))
        reject(error)
      })
  })
}

export const upVote = (imageId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(upVoteBegin())
    axios.post(`/votes`, {
      "image_id": imageId,
      "value": 1, // 0 for down vote
      "sub_id": "tradehoundsbot"
    })
      .then((response) => {
        const { data } = response
        dispatch(upVoteSuccess(data))
        resolve(response)
      }).catch((error) => {
        console.warn(error)
        dispatch(upVoteError(error))
        reject(error)
      })
  })
}