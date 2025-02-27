import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { getPostsWithComments } from './api/redditApi';

const LoadingPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; // Wait for router to be ready

    // Extract the search term from the query parameter named "query"
    const searchQuery = router.query.query;
    console.log("Router query:", router.query);

    if (!searchQuery || searchQuery.trim() === "") {
      console.log("No query parameter found. Redirecting to landing page.");
      router.push('/');
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getPostsWithComments(searchQuery);
        router.push({
          pathname: '/results',
          query: { data: JSON.stringify(data) },
        });
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };

    fetchData();
  }, [router]);

  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading your results...</LoadingText>
    </LoadingContainer>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #ed284c;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #555;
`;

export default LoadingPage;
