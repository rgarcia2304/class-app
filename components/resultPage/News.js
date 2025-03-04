import React, { useState, useEffect } from "react";
import styled from "styled-components";

const newsArticles = [
  {
    title: "New York Times",
    description: "Want to Shop More Sustainably? These 6 Tips Will Help.",
    image: "/images/newYorkTimes.webp",
    url: "https://www.nytimes.com/wirecutter/reviews/how-to-shop-more-sustainably-tips/",
  },
  {
    title: "Harvard",
    description: "Sustainable Purchasing",
    image: "/images/harvard.png",
    url: "https://sustainable.harvard.edu/resources/sustainable-purchasing/",
  },
  {
    title: "Center for Biological Diversity",
    description: "12 Ways to Live More Sustainably",
    image: "/images/bio.jpg",
    url: "https://www.biologicaldiversity.org/programs/population_and_sustainability/sustainability/live_more_sustainably.html#",
  },
  {
    title: "IBM",
    description: "What is sustainability in business",
    image: "/images/ibm.jpg",
    url: "https://www.ibm.com/think/topics/business-sustainability",
  },
  {
    title: "HausvonEden",
    description: "5 reasons why you should focus on quality over quantity",
    image: "/images/haus.webp",
    url: "https://www.hausvoneden.com/lifestyle/5-reasons-why-you-should-focus-on-quality-instead-of-quantity/",
  },
  {
    title: "MIT SLOAN",
    description: "What Does “Product Quality” Really Mean?",
    image: "/images/mit.jpg",
    url: "https://sloanreview.mit.edu/article/what-does-product-quality-really-mean/",
  },
  {
    title: "Forbes",
    description: "The Price Of Quality: Why Investing In The Customer Matters",
    image: "/images/forbes.webp",
    url: "https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2023/01/24/the-price-of-quality-why-investing-in-the-customer-matters/",
  },
  {
    title: "Washington Post",
    description: "How to buy quality clothes without spending a fortune",
    image: "/images/wp.avif",
    url: "https://www.washingtonpost.com/lifestyle/2024/01/31/how-to-buy-quality-clothes/",
  },
];

const NewsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const articles = newsArticles;
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Auto slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + articlesPerPage >= articles.length ? 0 : prevIndex + articlesPerPage
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [articles.length]);


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

      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot key={index} active={index === Math.floor(startIndex / articlesPerPage)} />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 20px 0;
`;


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


