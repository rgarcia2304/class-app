import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const UsedButton = ({ href }) => {
    return (
      <Link href={href} passHref>
        <StyledButton>Buy Used</StyledButton>
      </Link>
    );
  };

const StyledButton = styled.a`
  background-color: #008000;
  border: none;
  color: white;
  margin-right:30px;
  padding: 10px 15px;
  text-align: center;
  border-radius: 12px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  font-family: sans-serif;
  width:120px;
`;




export default UsedButton;