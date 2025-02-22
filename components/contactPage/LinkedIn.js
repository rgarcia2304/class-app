import React from 'react';
import Link  from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import styled from 'styled-components';

const LinkedInIcon = () => {
  return (
    <Square href="https://www.linkedin.com/in/rodrigo-garcia-84b004256/" target="_blank" rel="noopener noreferrer">
    <CiLinkedin />
    </Square>

  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  background-color:#ed284c; // Adjust the background color as needed
  color: white;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 24px; // Adjust icon size as needed
    height: 24px; // Adjust icon size as needed
  }

  &:hover {
    background-color: #ed284c; // Adjust hover effect as needed
  }
`;

export default LinkedInIcon;
