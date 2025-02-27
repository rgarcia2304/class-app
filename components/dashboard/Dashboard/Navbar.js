import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
//import { logOut } from '@/backend/Auth';
//import { useStateContext } from '@/context/StateContext';
import Home from './Home';
import ShoppingCart from '../ShoppingCart';
import LogOut from './Logout';
import SignUpButton from './SignUpButton';

//import { useStateContext } from '@/context/StateContext';
const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">Perreno </Logo>
      <Right_Items>
        <Home></Home>
        <About href="/about">About</About>
        <Contact  href="/contact"> Contact</Contact>
         <ShoppingCart></ShoppingCart>
         <LogOut></LogOut>
         
      </Right_Items>
    </Nav>
    );

};

const Contact = styled(Link)`
    display:flex;
    font-size: 16px;
    font-weight: 600;
    text-decoration:none;
    color:black;
    &:hover {
    color: red;
  }

`;
const About = styled(Link)`
    display:flex;
    font-size: 16px;
    font-weight: 600;
    text-decoration:none;
    color:black;

    &:hover {
    color: red;
  }

`;
const Right_Items = styled.div`
      display:flex;
      width: 25%;
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
    overflow: hidden;
    background-color: transparent;
`;
const Logo = styled(Link)`
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
