// pages/loading.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { searchBIFLSubreddit, getTopComments} from './api/redditApi';

const LoadingPage = () => {
  const router = useRouter();
  const { query } = router.query; // Get the search query from URL

  useEffect(() => {
    if (!query) {
      router.push('/');
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch search results from Reddit.
        const searchData = await searchBIFLSubreddit(query);
        let post = null;
        let comments = [];

        if (
          searchData &&
          searchData.data &&
          searchData.data.children &&
          searchData.data.children.length > 0
        ) {
          post = searchData.data.children[0].data;
          const commentsData = await getTopComments(post.id);
          if (
            commentsData &&
            commentsData[1] &&
            commentsData[1].data &&
            commentsData[1].data.children
          ) {
            comments = commentsData[1].data.children
              .slice(0, 5)
              .map((comment) => comment.data);
          }
        }

        // Pass the fetched data to the results page by encoding it as JSON in the URL.
        router.push({
          pathname: '/results',
          query: { data: JSON.stringify({ post, comments }) },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally, handle the error (e.g., push to an error page)
      }
    };

    fetchData();
  }, [query, router]);

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
