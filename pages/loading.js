import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";

const LoadingPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const searchQuery = router.query.query; 
  
    useEffect(() => {
      if (!router.isReady) return;
      if (!searchQuery || searchQuery.trim() === "") {
        router.push("/");
        return;
      }
  
      //needed in order to get loading effect to work when rendering
      const fetchRecommendation = async () => {
        try {
          //processes the Reddit information and ChatGPT analyzer
          const res = await fetch("/api/getRecommendation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: searchQuery }),
          });
          
          const recommendation = await res.json();
          router.push({
            pathname: "/results",
            query: { data: JSON.stringify(recommendation) },
          });
        } catch (error) {
          console.error("Error fetching recommendation:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchRecommendation();
    }, [router, searchQuery]);
  
    return (
      <LoadingContainer>
        <Spinner />
        <LoadingText>Loading your product recommendation...</LoadingText>
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
    border-top: 8px solid #008000;;
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