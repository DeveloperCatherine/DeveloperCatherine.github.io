import styled from 'styled-components'

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 0.25rem 1.6875rem;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  margin: 1px 1px 0 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    margin: 1px;
  }
  
  &:active {
    border: 1px solid #999999;
    color: #666666;
    margin: 1px;
  }

  &:focus {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    margin: 1px 1px 0 0;
  }
`;

export default Button