import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
const LandingBar = () => {

  return (
    <Nav>
      {/* <Logo onClick={() => logOut(setUser)} href="/">Perreno</Logo> */}
      <Logo> Perreno</Logo>
      <Right_Items>
         <About>About</About>
         <Contact> Contact</Contact>
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
    height: 50px;
    position: sticky;
    top: 0;
    overflow: hidden;
    background-color: transparent;
`;

const Logo = styled.div`
    margin-left:20px;
    font-size: 35px;
    font-weight: 1000;
    text-decoration:none;
    color:black;
`;



export default LandingBar;