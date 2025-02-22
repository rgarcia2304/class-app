import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <SearchContainer>
        <StyledInput
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
      </SearchContainer>
    );
  };

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color:#ed284c; 
  }
`;



export default SearchBar;