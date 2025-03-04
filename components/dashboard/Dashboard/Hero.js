
// pages/index.js
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Hero = () => {
  const router = useRouter();

  const handleSearch = (query) => {
    // Push to the loading page with the search query as a URL parameter.
    router.push({
      pathname: '/loading',
      query: { query },
    });
  };

  return (
    <Section>
      <Container>
        <Header1>Lets keep our  </Header1>
        <Header2>Earth Beautiful</Header2>
        <Header3>By Buying</Header3>
        <Header4>Sustainably</Header4>
        <SearchDiv> <SearchBar onSearch={handleSearch} /></SearchDiv>
        <Image src="/images/forest.gif" alt="hello" />
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
  margin-top:0px;
  margin-bottom:20px;
`;

const Header1 = styled.h1`
    font-family: sans-serif;
    color: white;
    position: absolute;
    font-size: 100px;
    left: 0%;
    top: 25%;

`;
const Header2 = styled.h1`
    font-family: sans-serif;
    color: white;
    position: absolute;
    font-size: 100px;
    left: 10%;
    top: 40%;

`;

const Header3 = styled.h1`
  font-family: sans-serif;
    color: white;
    position: absolute;
    font-size: 100px;
    left: 20%;
    top: 55%;
`;

const Header4 = styled.h1`
  font-family: sans-serif;
    color: white;
    position: absolute;
    font-size: 100px;
    left: 30%;
    top: 70%;
`;

const SearchDiv = styled.div`
  font-family: sans-serif;
    color: white;
    position: absolute;
    left: 40%;
    top: 85%;
`;


const Image = styled.img`
  margin-top: 0px;
  width: 100%; 
  height:100%;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export default Hero;
