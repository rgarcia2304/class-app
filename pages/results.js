import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import NewButton from "@/components/resultPage/NewButton";
import UsedButton from "@/components/resultPage/UsedButton";

const ResultsPage = () => {
  const router = useRouter();
  const { data } = router.query;
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setRecommendation(parsedData);
      } catch (error) {
        console.error("Error parsing data:", error);
        router.push("/");
      }
    }
  }, [data, router]);

  if (!recommendation) {
    return <div>Loading recommendation...</div>;
  }

  return (
    <ResultsContainer>
      <ResultCard>
        <ProductTitle>Recommended Product: {recommendation.product}</ProductTitle>
        <ProductReason>{recommendation.reason}</ProductReason>
        <NewButton href={recommendation.link_new}>Buy New</NewButton>
        <UsedButton href={recommendation.link_used}>Buy Used</UsedButton>

      </ResultCard>
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
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
`;

const ProductTitle = styled.h2`
  margin-bottom: 10px;
`;

const ProductReason = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;


export default ResultsPage;
