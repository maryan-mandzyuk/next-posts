import * as types from '../types'
import axios from 'axios'
export const fetchPosts = () => async dispatch => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  dispatch({
    type: types.GET_POSTS,
    payload: res.data

  })
};

export const fetchPost = (id: string) => async (dispatch) => {
  console.log("here");
  const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
  dispatch({
    type: types.GET_POST,
    payload: res.data

  })
}