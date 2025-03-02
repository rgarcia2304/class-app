import React from 'react';
import Link  from 'next/link';
import { FaRegTrashCan } from "react-icons/fa6";
import styled from 'styled-components';

const Trashcan = (props) => {
  return (
    <Square {...props}>
      <FaRegTrashCan />
    </Square>
  );
};

const Square = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  background-color:  #008000; // Adjust the background color as needed
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
    margin:10px;
`;

export default Trashcan;