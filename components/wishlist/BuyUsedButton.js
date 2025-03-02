import React from 'react';
import Link  from 'next/link';
import styled from 'styled-components';

const BuyUsedButton = ( {href} ) => {
  return (
    <BuyUsedButtons href = {href}>
      Buy Used
    </BuyUsedButtons>
  );
};

const BuyUsedButtons = styled(Link)`
      background-color: #008000; 
      border: none;
      color: white;
      padding: 15px 15px;
      text-align: center;
      border-radius:12px;
      font-size: 14px;
      text-decoration:none;
      font-weight: 600;
       width: 100px;
      height:50px;
       display:flex;
      justify-content:center;
      align-items:center;
      margin:10px;

`;


export default BuyUsedButton;