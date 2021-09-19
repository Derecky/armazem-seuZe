import styled from "styled-components";

export const Button = styled.button`
  height: 32px;
  width: 32px;
  font-size: 14px;
  margin: 0px 8px;
  font-weight: bold;
  border-radius: 4px;
  color: #FFFFFF;

  :disabled{
    background-color: #F2A03D;
    cursor: default;
  }
`;

export const Button1 = styled.button`
  height: 32px;
  width: 32px;
  margin: 0px 4px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 4px;
  
  background-color: #72463B;
  color: #FFFFFF;

  transition: background-color 0.3s;
  &:hover{
    background-color: #2E1C18;
  }
`;