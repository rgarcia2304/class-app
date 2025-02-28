// SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // When the form is submitted (i.e. Enter is pressed), trigger the onSearch callback.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Start your search for a high quality item...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width:500px;
  height:50px;
`;

export default SearchBar;
