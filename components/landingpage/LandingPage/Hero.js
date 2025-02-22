import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
const item_list = [
  { word: "Shoes", image: "/images/shoes.jpg" },
  { word: "Cowboy Hat", image: "/images/cowboy.webp" },
  { word: "Jacket", image: "/images/jacket.jpg" },
];
const Hero = () => {

  const [currentWord, setCurrentWord] = useState(item_list[0]); // Start with the first word

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = item_list.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % item_list.length;
        return item_list[nextIndex];
      });
    },4000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Section>

        <Container>
            <Header1>We've got </Header1>
            <Header2>the perfect</Header2>
            <Header4>{currentWord.word}</Header4>
            <Header3>for you</Header3>
            <Image src={currentWord.image} alt={currentWord.word} />
            <CTAButton>Get Started Today</CTAButton>
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
    margin-bottom: 20px;

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
  width: 400px; 
  height:400px;
  border-radius: 10px; /* Optional for styling */
  margin-bottom: 30px;
`;

export default Hero;
