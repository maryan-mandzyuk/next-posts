import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { IPostsState } from '../store/reducers/postReducer';
import { setPosts } from './../store/actions/postActions';
import { Post } from './../components/Post';
import { MainLayout } from './../components/MainLayout';
import { IPost } from './../interfaces/Posts';

const PostsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

interface IState {
  post: any
}

type HomeProps = {
  posts: IPost[];
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {

  const dispatch = useDispatch();

  //const { posts } = useSelector<IState, IPostsState>(state => state.post)

  useEffect(() => {
    dispatch(setPosts(posts));
  }, []);

  return (
    <MainLayout>
      <PostsLayout>
        {posts.map((post) => <Post key={post.id} title={post.title} id={post.id} body={post.body}></Post>

        )}
      </PostsLayout>
    </MainLayout>

  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  return {
    props: {
      posts: res.data
    }
  }
}
export default Home;