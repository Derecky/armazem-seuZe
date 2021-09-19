import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 0px 24px;
  height: 35px;
`;

export const ItemTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  width: 350px;
`;

export const CountButton = styled.div`

`;

export const ButtonLeft = styled.button`
  width: 24px;
  height: 24px;

  border-radius: 8px 0px 0px 8px;

  background-color: #F2A03D;

  color: #FFFFFF;
  font-weight: bold;
  
  transition: background-color 0.3s;
  &:hover {
    background-color: #AA702B;
  }

`;

export const QuantityInput = styled.input`
  border: none;
  text-align: center;
  width: 48px;
  max-width: 120px;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }    
`;

export const ButtonRight = styled.button`
width: 24px;
  height: 24px;

  border-radius: 0px 8px 8px 0px;

  background-color: #F2A03D;

  color: #FFFFFF;
  font-weight: bold;

  transition: background-color 0.3s;
  &:hover {
    background-color: #AA702B;
  }
`;

export const Price = styled.h2`
  font-size: 16px;
  font-weight: normal;
  max-width: 200px;
  min-width: 120px;

`;

export const Divider = styled.hr`
  border: 1px solid #EEEEEE;
  width: 720px;

  align-self: center;
`;
