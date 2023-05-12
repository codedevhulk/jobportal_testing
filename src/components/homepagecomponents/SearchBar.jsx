import React from 'react'
import styled from 'styled-components';
const SearchBar = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #98c1d9;
  font-size: 16px;
  outline: none;
  margin-top: 50px;
  height: 30px;
  padding-left: 30px;
  color: rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 700px) {
    width: 60%;
  }
`;
const SearchBarComponent = () => {
  return (
    <SearchBar placeholder='search'/>
  )
}

export default SearchBarComponent