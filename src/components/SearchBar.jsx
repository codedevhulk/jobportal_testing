import styled from 'styled-components';
import { setSearchInputValue } from '../store/slices/searchserviceslice';
import { useDispatch } from 'react-redux';


const SearchBar = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #98c1d9;
  font-size: 16px;
  outline: none;
  margin-top: 50px;
  height: 30px;
  padding-left: 30px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: rgba(238, 108, 77, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media screen and (max-width: 700px) {
    width: 60%;
  }
`;
const SearchBarComponent = () => {
  const dispatch = useDispatch();
  
  return (
    <SearchBar placeholder='Search Jobs' onChange={(e)=>dispatch(setSearchInputValue(e.target.value))}/>
  )
}

export default SearchBarComponent