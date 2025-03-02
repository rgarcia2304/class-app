import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';

const BuyUsedButton = () => {
  return (
    <BuyUsedButtons href="/auth/signup">
      Buy Used
    </BuyUsedButtons>
  );
};

const BuyUsedButtons = styled(Link)`
      background-color: #008000; 
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      border-radius:12px;
      font-size: 16px;
      text-decoration:none;
      font-weight: 600;

`;


export default BuyUsedButton;