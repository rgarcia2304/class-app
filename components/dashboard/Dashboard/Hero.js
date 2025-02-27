
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
        <Header1>Why not search</Header1>
        <Header2>for something</Header2>
        <Header3>that will last you</Header3>
        <Header4>Forever</Header4>
        <Image src="/images/images.jpeg" alt="hello" />
        <SearchBar onSearch={handleSearch} />
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
  color: #ed284c;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 372px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export default Hero;
