import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { useState,useEffect } from 'react';
import { useContext } from 'react';

const Hero = () => {
  return (
    <Section>
        <Container>
            <Header1>Why not search </Header1>
            <Header2> for something </Header2>
            <Header3>that will last you </Header3>
            <Header4> Forever</Header4>
            <Image src="/images/images.jpeg" alt="hello" />
            <SearchBar></SearchBar>

        </Container>
    </Section>
  );

};

const Section = styled.section`
width: 100%;
height: 110vh;
`;



const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`;

const Header1 = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align:center;
    
    margin-bottom:10px;

`;
const Header2 = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align:center;
    margin:10px 10px;

`;
const Header3 = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align:center;
    margin-top:10px;
    margin-bottom: 10px;

`;
const Header4 = styled.h1`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align:center;
    margin-bottom:10px;
    margin-top:10px;
    color: #ed284c;;

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
  width: 372px; 
  height:200px;
  border-radius: 10px; /* Optional for styling */
  margin-bottom: 30px;
`;

export default Hero;
