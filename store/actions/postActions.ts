import * as types from '../types'
import axios from 'axios'
export const fetchPosts = () => async dispatch => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  dispatch({
    type: types.GET_POSTS,
    payload: res.data

  })
}