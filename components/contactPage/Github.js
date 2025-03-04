import React from 'react';
import Link  from 'next/link';
import { FaGithub } from "react-icons/fa";
import styled from 'styled-components';

const Github = () => {
  return (
    <Square href="https://www.github.com/rgarcia2304">
      <FaGithub />
    </Square>
  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  background-color: #008000; // Adjust the background color as needed
  color: white;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 24px; // Adjust icon size as needed
    height: 24px; // Adjust icon size as needed
  }

  &:hover {
    background-color: black; // Adjust hover effect as needed
  }
`;

export default Github;
