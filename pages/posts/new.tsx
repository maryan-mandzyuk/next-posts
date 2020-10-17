import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { MainLayout } from './../../components/MainLayout';

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  font-family:inherit;
  font-size: inherit;
  max-width: 300px;
  &:focus {
    outline:0;
    box-shadow: 0 0 20px 10px rgba(0,0,0,0.09);
  }
`

const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  font-family:inherit;
  font-size: inherit;
  max-width: 300px;
  &:focus {
    outline:0;
    box-shadow: 0 0 20px 10px rgba(0,0,0,0.09);
  }
`

const Button = styled.button`
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

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('https://simple-blog-api.crew.red/posts', { title, body }).then(() => {
      setBody('');
      setTitle('');
    });
  }

  return (
    <MainLayout>
      <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", textAlign: "center" }}>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title">
        </Input>
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} rows={4} placeholder="Text"></TextArea>
        <Button type="submit">Submit</Button>
      </form>
    </MainLayout>

  )
}

export default NewPost

