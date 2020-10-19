import * as types from '../types'
import axios from 'axios'
export const setPosts = (posts) => async dispatch => {
  // const res = await axios.get('https://simple-blog-api.crew.red/posts');
  dispatch({
    type: types.GET_POSTS,
    payload: posts

  })
};

export const setPost = (post) => async dispatch => {
  dispatch({
    type: types.GET_POST,
    payload: post

  })
}