import React from 'react';
import Link  from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import styled from 'styled-components';

const ShoppingCart = () => {
  return (
    <Square href="/dashboard">
      <FaShoppingCart />
    </Square>
  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  color: black;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 24px; // Adjust icon size as needed
    height: 24px; // Adjust icon size as needed
  }

  &:hover {
    color: #ed284c; // Adjust hover effect as needed
  }
`;

export default ShoppingCart;
