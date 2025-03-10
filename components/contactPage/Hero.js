import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import LinkedInIcon from './LinkedIn';
import Github from './Github';

const Hero = () => {
  return (
    
    <Section>

        <Container>
            <Header3>Get in contact with us</Header3>
        </Container>
        <ImgContainer>
      <Image2 src = "/images/ca.jpg"/>
      </ImgContainer>
        <Container2>
           
        <Headeraboutcont> Email: rgarcia22141@gmail.com</Headeraboutcont>
        <ContainerSocials><LinkedInIcon></LinkedInIcon>
        <Github></Github></ContainerSocials>
        
        </Container2>
    </Section>
  );
};

const Section = styled.section`
width: 100%;
`;

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`;
const ContainerSocials = styled.div`
    display:flex;
    margin-top:10px;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    width:8%;
`;
const Container2 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:25px;
`;
const Header1 = styled.h1`
    font-family: sans-serif;
    color: #008000;
    position: absolute;
    font-size: 140px;
    left: 20%;
    top: 10%;
    opacity:75%;

`;
const Header2 = styled.h1`
    font-family: sans-serif;
    color: #008000;
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
    color: #008000;

`;


const CTAButton = styled.button`
    display:flex;
    justify-content:center;
    background-color: #008000; 
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

const Image2 = styled.img`
  margin-top: 10px;
  width: 150px;
  height:200px;
  border-radius: 10px; /* Optional for styling */
  margin-bottom: 30px;
  
`;

const ImgContainer = styled.div`
    display:flex;
    justify-content:center;
`;

export default Hero;