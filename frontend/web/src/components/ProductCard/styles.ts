import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 24px;
  width: 368px;
  height: 160px;
  background-color: #FFFFFF;

  border-radius: 8px;
  margin-left: 32px;

  display: flex;
  justify-content: space-between;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const CardImageContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: beige;

  border-radius: 8px 0px 0px 8px;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;

  background-color: #FFFFFF;

  border-radius: 8px 0px 0px 8px;

  padding: 8px;
`;

export const CardInfo = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;

  padding: 16px;
  
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  max-height: 30px;
`;

export const Description = styled.h1`
  font-size: 12px;
  font-weight: normal;


  margin-top: 4px;
  color: #BDBDBD;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 8px 4px;
`;

export const BRLCentavo = styled.h2`
  font-size: 14px;
`;

export const Real = styled.h1`
  font-size: 28px;
`;

export const ButtonContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: flex-end;
  
  
`;

export const Button = styled.button`
  background-color: #F13D3C;
  border-radius: 8px;

  height: 35px;
  width: 139px;

  color: #FFFFFF;
  font-size: 14px;

  justify-self: flex-end;

  transition: background-color 0.3s;

  &:hover {
    background-color: #A92B2A;
    
  }
`;