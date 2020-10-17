import * as types from '../types';
import { IPost } from '../../interfaces/Posts';

export interface IPostsState {
  posts: Array<IPost>
  post: IPost
}

const initialState: IPostsState = {
  posts: [],
  post: {},
}
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case types.GET_POST:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}