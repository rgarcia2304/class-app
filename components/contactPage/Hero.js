import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import LinkedInIcon from './LinkedIn';

const Hero = () => {
  return (
    
    <Section>

        <Container>
            <Header3>Get in contact with us</Header3>
        </Container>
        <Container2>
        <Headeraboutcont> Email: Rgarcia22141@gmail.com</Headeraboutcont>
        <LinkedInIcon></LinkedInIcon>
        </Container2>
    </Section>
  );
};

const Section = styled.section`
width: 100%;
height: 150vh;
`;

const Space = styled.br`
    margin-top:20px;
`;
const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`;
const Container2 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:250px;
`;
const Header1 = styled.h1`
    font-family: sans-serif;
    color: #ed284c;
    position: absolute;
    font-size: 140px;
    left: 20%;
    top: 10%;
    opacity:75%;

`;
const Header2 = styled.h1`
    font-family: sans-serif;
    color: #ed284c;
    position: absolute;
    font-size: 140px;
    left: 40%;
    top: 30%;
    opacity:75%;

`;
const Header5 = styled.h1`
    font-family: sans-serif;
    color: black;
    position: absolute;
    font-size: 140px;
    left: 60%;
    top: 50%;

`;
const Header3 = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align:center;
    margin-top:10px;
    margin-bottom: 20px;
    margin-left: 250px;
    margin-right:250px;

`;
const Headerabout = styled.h1`
    font-family: sans-serif;
    display: flex;
    font-size: 50px;
    text-align:center;
    margin-top:150px;
    margin-bottom: 20px;
    margin-left: 100px;
    margin-right:300px;

`;
const Headeraboutcont = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-right: 30px;

`;
const Header4 = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align:center;
    margin-bottom:10px;
    margin-top:10px;
    color: #ed284c;

`;


const CTAButton = styled.button`
    display:flex;
    justify-content:center;
    background-color:#ed284c; 
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    border-radius:12px;
    font-size: 16px;
    text-decoration:none;
    font-weight: 600;
    width:250px;
    height:50px;
    align-items: center;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 600px; 
  height:600px;
  border-radius: 10px; /* Optional for styling */
  margin-bottom: 30px;
`;

export default Hero;