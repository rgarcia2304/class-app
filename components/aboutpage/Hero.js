import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';

const Hero = () => {
  return (
    
    <Section>

        <Container>
           <Image src="/images/cons.webp" alt="hello" />
            <Header1>We've got </Header1>
            <Header2>to stop </Header2>
            <Header5>this</Header5>
            <Header3>We noticed that nowadays we buy more and more products but they last less and less creating an infinite cycle</Header3>
            <CTAButton>Get Started Today</CTAButton>
        </Container>
        <Container2>
        <Headerabout>About Perreno</Headerabout>
        <Headeraboutcont> Here at Perrano we are commited to giving you the best product recommendations on pretty much everything.
            We source our recommendations based on what real people think is the best.
            <Space> 
            </Space>
            <Space> 
            </Space>
            <Space> 
            </Space>
            <Space> 
            </Space>
             Now why are we doing this?
            We like many people are tired of buying things that break right away. 
            When you buy quality items you can use them for a pretty long time. This in turn saves you money, and helps our earth one less item
            thrown in the trash at a time
            <Space> 
            </Space>
            <Space> 
            </Space>
            <Space> 
            </Space>
            <Space> 
            </Space>
            "The bitterness of poor quality remains long after the sweetness of low price is forgotten”. <Space></Space>- Benjamin Franklin 
        </Headeraboutcont>
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
    justify-content:space-between;
    margin-top:50px;
`;
const Header1 = styled.h1`
    font-family: sans-serif;
    color: #008000;
    position: absolute;
    font-size: 140px;
    left: 20%;
    top: 10%;

`;
const Header2 = styled.h1`
    font-family: sans-serif;
    color: #008000;
    position: absolute;
    font-size: 140px;
    left: 40%;
    top: 30%;

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
    margin-top:150px;
    margin-bottom: 20px;
    margin-left: 100px;
    margin-right:100px;

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

export default Hero;