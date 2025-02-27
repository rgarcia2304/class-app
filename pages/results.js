import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ResultsPage = () => {
  const router = useRouter();
  const { data } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setResults(parsedData);
      } catch (error) {
        console.error("Error parsing data:", error);
        router.push('/');
      }
    }
  }, [data, router]);

  if (!results || results.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ResultsContainer>
      {results.map((item, index) => (
        <ResultCard key={index}>
          <PostTitle>{item.post.title}</PostTitle>
          <PostBody>{item.post.selftext || "No content available"}</PostBody>
          <CommentsSection>
            <h3>Top Comments:</h3>
            <ul>
              {item.comments.map((comment, idx) => (
                <li key={idx}>{comment.body}</li>
              ))}
            </ul>
          </CommentsSection>
        </ResultCard>
      ))}
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ResultCard = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const PostTitle = styled.h2`
  margin-bottom: 10px;
`;

const PostBody = styled.p`
  margin-bottom: 10px;
`;

const CommentsSection = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
`;

export default ResultsPage;
