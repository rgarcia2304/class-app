// pages/index.js
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const item_list = [
  { word: "Shoes", image: "/images/shoes.jpg" },
  { word: "Cowboy Hat", image: "/images/cowboy.webp" },
  { word: "Jacket", image: "/images/jacket.jpg" }
];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(item_list[0]);
  const [chatResult, setChatResult] = useState(null);

  // Cycle through the words in the item list
  const cycleWords = async () => {
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setCurrentWord((prevWord) => {
        const currentIndex = item_list.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % item_list.length;
        return item_list[nextIndex];
      });
    }
  };

  // Start the cycle once (using useEffect is more appropriate, but we'll use this simple one for now)
  useState(() => {
    cycleWords();
  });

  // Function to call the ChatGPT API endpoint
  const handleTestChat = async () => {
    try {
      const res = await fetch("/api/chatgptAPI", { method: "POST" });
      const data = await res.json();
      setChatResult(data);
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
    }
  };

  return (
    <Section>
      <Container>
        <Header1>We've got </Header1>
        <Header2>the perfect</Header2>
        <Header4>{currentWord.word}</Header4>
        <Header3>for you</Header3>
        <Image src={currentWord.image} alt={currentWord.word} />
        <CTAButton href="/auth/signup">Get Started Today</CTAButton>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 110vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Header1 = styled.h1`
  font-family: sans-serif;
  font-size: 50px;
  text-align: center;
  margin-bottom: 10px;
`;

const Header2 = styled.h1`
  font-family: sans-serif;
  font-size: 50px;
  text-align: center;
  margin: 10px;
`;

const Header3 = styled.h1`
  font-family: sans-serif;
  font-size: 50px;
  text-align: center;
  margin: 10px 0;
`;

const Header4 = styled.h1`
  font-family: sans-serif;
  font-size: 50px;
  text-align: center;
  margin: 10px 0;
  color: #008000;
`;

const CTAButton = styled(Link)`
  display: flex;
  justify-content: center;
  background-color: #008000;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  border-radius: 12px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  width: 250px;
  height: 50px;
  align-items: center;
  font-family: sans-serif;
  margin-top: 20px;
`;



const Image = styled.img`
  margin-top: 10px;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 30px;
`;


export default Hero;

