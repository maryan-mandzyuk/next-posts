import React, { FunctionComponent } from 'react';
import styled from 'styled-components'
import Link from 'next/link';
const Card = styled.div`
  margin: 10px 30px;
  padding: 2px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 300px;
  min-height: 300px;
  height: auto;
  text-align: center;
  overflow: hidden;
`

const CardBody = styled.div`
  color: #696969;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
`


type PostProps = {
  title: string;
  body: string;
  id: number;
}

export const Post: FunctionComponent<PostProps> = ({ title, body, id }) => {
  return (
    <div>
      <Link href={`/posts/[id]`} as={`/posts/${id}`}>
        <a>
          <Card>
            <h3>{title}</h3>
            <CardBody>{body}</CardBody>
          </Card>
        </a>
      </Link>

    </div>
  )
}
