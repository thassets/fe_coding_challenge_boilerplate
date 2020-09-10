import axios from 'axios'
import { DEFAULT_USER } from '../../../../../constants'

export const postUpVoteRequest = (imageId, value = 1) => {
  return axios.post(`/votes`, {
    "image_id": imageId,
    "value": value, // 0 for down vote
    "sub_id": process.env.EXPO_USER || DEFAULT_USER
  })
}