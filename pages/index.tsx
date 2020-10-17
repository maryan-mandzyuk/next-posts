import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { IPostsState } from '../store/reducers/postReducer';
import styles from '../styles/Home.module.css'
import { fetchPosts } from './../store/actions/postActions';
import { Post } from './../components/Post';
import { MainLayout } from './../components/MainLayout';

const PostsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

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
    <MainLayout>
      <PostsLayout>
        {posts.map((post) => <Post key={post.id} title={post.title} id={post.id} body={post.body}></Post>

        )}
      </PostsLayout>
    </MainLayout>

  )
}
export default Home;