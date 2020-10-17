import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  color: #8f8f8f;
  font-size: 24px;
  font-weight: 400;
  }
`

const Main = styled.main`
padding-top: 120px
`

const NavItem = styled.p`
margin: 0;
position: relative;
transition: all 1s ease-in-out;
color: #aaa;
&::before {
  content: attr(title);
  transition: all 0.7s ease-in-out;
  color: #8C82FC;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  overflow: hidden;
}

&:hover {
  &::before {
    width: 100%;
  }
}
`

export const MainLayout = ({ children }) => {
  return (
    <>
      <Nav>
        <Link href={'/'}><a><NavItem title="Home">Home</NavItem> </a></Link>
        <Link href={'/posts/new'}><a><NavItem title="Add New Post">Add New Post</NavItem></a></Link>
      </Nav>
      <Main>{children}</Main>
    </>
  )
}
