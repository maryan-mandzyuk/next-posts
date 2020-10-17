import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPost } from '../../store/actions/postActions';
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

const PostPage = () => {
  const router = useRouter();
  const { post } = useSelector<IState, IPostsState>(state => state.post)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost(router.query.id.toString()));
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
export default PostPage;
