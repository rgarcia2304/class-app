import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';

const SignUpButton = () => {
  return (
    <SigninButtons href="/auth/signup">
      Sign Up
    </SigninButtons>
  );
};

const SigninButtons = styled(Link)`
      background-color: #008000; 
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      border-radius:12px;
      font-size: 16px;
      text-decoration:none;
      font-weight: 600;

       &:hover {
    background-color: black; // Adjust hover effect as needed
  }

`;

export default SignUpButton;