// pages/results.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ResultsPage = () => {
  const router = useRouter();
  const { data } = router.query;
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setResultData(parsedData);
      } catch (error) {
        console.error('Error parsing data:', error);
        router.push('/');
      }
    }
  }, [data, router]);

  if (!resultData) {
    return <div>Loading...</div>;
  }

  const { post, comments } = resultData;

  return (
    <ResultsContainer>
      <PostSection>
        <h2>{post.title}</h2>
        <p>{post.selftext}</p>
      </PostSection>
      <CommentsSection>
        <h3>Top Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.body}</li>
          ))}
        </ul>
      </CommentsSection>
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const PostSection = styled.div`
  margin-bottom: 30px;
`;

const CommentsSection = styled.div`
  margin-top: 20px;
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
