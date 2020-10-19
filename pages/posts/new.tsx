import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLayout } from './../../components/MainLayout';

const Input = styled.input`
  margin: 10px auto;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  color: ${props => props.error ? "red" : "#8C82FC"};
  &::placeholder {
    color: ${props => props.error ? "red" : "#8C82FC"};
  }
  font-family:inherit;
  font-size: inherit;
  width: 300px;
  max-width: 400px;
  &:focus {
    outline:0;
    box-shadow: 0 0 20px 10px rgba(0,0,0,0.09);
  }
`

const TextArea = styled.textarea`
  margin: 10px auto;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  font-family:inherit;
  font-size: inherit;
  width: 300px;
  max-width: 400px;
  color: ${props => props.error ? "red" : "#8C82FC"};
  &::placeholder {
    color: ${props => props.error ? "red" : "#8C82FC"};
  }
  &:focus {
    outline:0;
    box-shadow: 0 0 20px 10px rgba(0,0,0,0.09);
  }
`

const Button = styled.button`
  margin-top: 20px;
  font-family: 'Ubuntu', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 170px;
  height: 40px;
  line-height: 1;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 2px solid #8C82FC;
  background: #fff;
  color: #8C82FC;
  border-radius: 40px;
  cursor: pointer;
  overflow: hidden;
  &:active {
    box-shadow: 0 0 15px 5px rgba(0,0,0,0.09);
    background: rgba(0,0,0,0.06);
    color: #7E75E2;
    border-color: #8C82FC;
  }
  &:focus {
    outline: 0;
  }`

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState(false)
  const [bodyError, setBodyError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 3) {
      if (body.length > 5) {
        axios.post('https://simple-blog-api.crew.red/posts', { title, body }).then(() => {
          setBody('');
          setTitle('');
          setBodyError(false);
          setTitleError(false);
        });
      } else {
        setBodyError(true);
      }
    } else {
      setTitleError(true);
    }
  }

  const onTitleChangeHandler = (title: string) => {
    setTitle(title);
    setTitleError(false);
  }

  const onBodyChangeHandler = (body: string) => {
    setBody(body);
    setBodyError(false);
  }

  return (
    <MainLayout>
      <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", textAlign: "center" }}>
        <Input error={titleError} value={title} onChange={(e) => onTitleChangeHandler(e.target.value)} placeholder="Title">
        </Input>
        <TextArea error={bodyError} value={body} onChange={(e) => onBodyChangeHandler(e.target.value)} rows={4} placeholder="Text"></TextArea>
        <Button type="submit">Submit</Button>
      </form>
    </MainLayout>

  )
}

export default NewPost

