// Hero.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { searchBIFLSubreddit,getTopComments } from '@/pages/api/redditApi';

const Hero = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const handleSearch = async (query) => {
    try {
      // Execute the search in the BIFL subreddit.
      const searchData = await searchBIFLSubreddit(query);
      if (
        searchData &&
        searchData.data &&
        searchData.data.children &&
        searchData.data.children.length > 0
      ) {
        // Get the most relevant post (first result)
        const topPost = searchData.data.children[0].data;
        setPost(topPost);

        // Fetch the top 5 comments for the most relevant post.
        const commentsData = await getTopComments(topPost.id);
        if (
          commentsData &&
          commentsData[1] &&
          commentsData[1].data &&
          commentsData[1].data.children
        ) {
          const topComments = commentsData[1].data.children
            .slice(0, 5)
            .map((comment) => comment.data);
          setComments(topComments);
        }
      }
    } catch (error) {
      console.error('Error fetching Reddit data:', error);
    }
  };

  return (
    <Section>
      <Container>
        <Header1>Why not search </Header1>
        <Header2> for something </Header2>
        <Header3>that will last you </Header3>
        <Header4> Forever</Header4>
        <Image src="/images/images.jpeg" alt="hello" />

        {/* Pass the handleSearch function to the SearchBar */}
        <SearchBar onSearch={handleSearch} />

        {/* Optionally, render the search results */}
        {post && (
          <Result>
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
          </Result>
        )}
        {comments.length > 0 && (
          <CommentsSection>
            <h3>Top Comments:</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.body}</li>
              ))}
            </ul>
          </CommentsSection>
        )}
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

const Result = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CommentsSection = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 60%;
`;

export default Hero;

