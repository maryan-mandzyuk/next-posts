import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { NextPageContext } from 'next';
import { setPost } from '../../store/actions/postActions';
import { IPostsState } from '../../store/reducers/postReducer';
import { MainLayout } from './../../components/MainLayout';

const PostLayout = styled.div`
  padding: 30px 200px;
  text-align: center;
  font-size: 1.8rem;
  @media(max-width: 768px) {
    padding: 30px 40px;
    font-size: 1.6rem
  }

  @media(max-width: 500px) {
    padding: 30px 10px;
    font-size: 1.8rem
  }
`;

const PostBody = styled.p`
  color: #313b3f;

`

interface IState {
  post: any
}

const PostPage = ({ post }) => {
  const router = useRouter();
  // const { post } = useSelector<IState, IPostsState>(state => state.post)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPost(post));
  }, []);

  return (
    <MainLayout>
      <PostLayout>
        <h1>{post.title}</h1>
        <PostBody>{post.body}</PostBody>
      </PostLayout>
    </MainLayout>

  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
  const res = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}`);
  return {
    props: {
      post: res.data
    }
  }
}
export default PostPage;
