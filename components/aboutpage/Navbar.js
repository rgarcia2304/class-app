import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
//import { logOut } from '@/backend/Auth';
//import { useStateContext } from '@/context/StateContext';
import Home from './Home';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import ShoppingCart from './ShoppingCart';
const Navbar = () => {
  //const { setUser } = useStateContext()

  return (
    <Nav>
      <Logo>Perreno </Logo>
      <Right_Items>
        <Home></Home>
         <About>About</About>
         <Contact> Contact</Contact>
         <ShoppingCart></ShoppingCart>
         <Buttons>
        <LoginButton></LoginButton>
        <SignUpButton></SignUpButton>
        </Buttons>
      </Right_Items>
    </Nav>
  );
};

const Contact = styled.div`
    display:flex;
    font-size: 16px;
    font-weight: 600;

`;
const About = styled.div`
    display:flex;
    font-size: 16px;
    font-weight: 600;

`;
const Right_Items = styled.div`
      display:flex;
      width: 35%;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-right: 25px;

`;

const Buttons = styled.div`
  display:flex;
  width: 175px;
  justify-content: space-between;
`;
const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-family: sans-serif;
    height: 100px;
    position: sticky;
    top: 0;
    background: white;
    z-index:1000;
`;
const Logo = styled.div`
    margin-left:20px;
    font-size: 35px;
    font-weight: 1000;
    text-decoration:none;
    color:black;
`;
// const Logo = styled(Link)`
//     font-size: 25px;
//     font-weight: 1000;
//     text-decoration:none;
//     color:black;
// `;



export default Navbar;
