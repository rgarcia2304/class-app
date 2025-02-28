import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NewButton = ({ href }) => {
    return (
      <Link href={href} passHref>
        <StyledButton>Used</StyledButton>
      </Link>
    );
  };
  
const StyledButton = styled.a`
  background-color: #b5b0b0;
  border: none;
  color: black;
  padding: 10px 15px;
  text-align: center;
  border-radius: 12px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
`;



export default NewButton;