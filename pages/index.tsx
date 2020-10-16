import Head from 'next/head'
import { useEffect } from 'react';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { IPostsState } from '../store/reducers/postReducer';
import styles from '../styles/Home.module.css'
import { fetchPosts } from './../store/actions/postActions';

interface IState {
  post: any
}

const Home = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector<IState, IPostsState>(state => state.post)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  return (
    <ul>
      {posts.map((post) => <li key={post.id}>
        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
          <a>{post.id}</a>
        </Link>
      </li>)}
    </ul>
  )
}
export default Home;