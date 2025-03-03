import React, { useState, useEffect } from "react";
import styled from "styled-components";


const NewsCarousel = ({ articles }) => {
  const [startIndex, setStartIndex] = useState(0);
  const articlesPerPage = 4;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + articlesPerPage >= articles.length ? 0 : prevIndex + articlesPerPage
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [articles.length]);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + articlesPerPage >= articles.length ? 0 : prevIndex + articlesPerPage
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - articlesPerPage < 0 ? articles.length - articlesPerPage : prevIndex - articlesPerPage
    );
  };

  return (
    <CarouselContainer>
      
      <ArticlesContainer>
        {articles.slice(startIndex, startIndex + articlesPerPage).map((article, index) => (
          <ArticleLink key={index} href={article.url} target="_blank" rel="noopener noreferrer">
            <ArticleCard>
              <Image src={article.image} alt={article.title} />
              <Title>{article.title}</Title>
              <Description>{article.description}</Description>
            </ArticleCard>
          </ArticleLink>
        ))}
      </ArticlesContainer>

      <ArrowContainer>
      <ArrowButton onClick={prevSlide} disabled={articles.length <= articlesPerPage}>
        ❮
      </ArrowButton>
      <ArrowButton onClick={nextSlide} disabled={articles.length <= articlesPerPage}>
        ❯
      </ArrowButton>

      </ArrowContainer>
      
      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot key={index} active={index === Math.floor(startIndex / articlesPerPage)} />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 20px 0;
`;

const ArrowContainer = styled.div`
    display:flex;
`

const ArticlesContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  transition: transform 0.4s ease-in-out;
`;

const ArticleLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ArticleCard = styled.div`
  width: 220px;
  padding: 15px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

const ArrowButton = styled.button`
  cursor: pointer;
  padding: 12px;
  font-size: 22px;
  border: none;
  background-color: #008000;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
  margin: 0 10px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#008000" : "#ccc")};
  transition: background 0.3s ease-in-out;
`;

export default NewsCarousel;

