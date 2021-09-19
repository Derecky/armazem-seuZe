import styled from "styled-components";
import { FiShoppingBag } from 'react-icons/fi'
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  width: 752px;

  align-self: center;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 56px;

  align-self: center;
  margin-top: 64px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 752px;
  align-self: center;

  margin-top: 32px;
  
`;

export const Icon = styled(FiShoppingBag)`
  font-size: 80px;
  margin-right: 16px;
`;

export const MarketContainer = styled.div`

`;

export const Text = styled.h1`
  font-size: 24px;
  font-weight: bold;


`;

export const TimeInfo = styled.h2`
  font-size: 18px;
  font-weight: normal;

  color: #757575
`;

export const ReviewText = styled.h1`
  font-size: 24px;
  font-weight: bold;

  margin-top: 32px;
`;

export const ReviewItemsContainer = styled.div`
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-top: 10px;
  padding: 24px 0px;

  display: flex;
  flex-direction: column;
`;


export const TotalCotainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 0px 24px;
  margin-top: 10px;
  height: 30px;
`;

export const TotalText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  padding: 24px 0px;
`;

export const Button = styled.button`
  width: 272px;
  height: 50px;
  background-color: #F13D3C;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;

  transition: background-color 0.3s;
  &:hover{
    background-color: #AA702B;
  }
`;

export const Alert = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background-color: #F5F1EF;
  padding: 32px;

  width: 500px;
  height: 500px;
`;

export const Image = styled.img`
  width: 300px;
`;

export const ButtonLeave = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #AA702B;
  border-radius: 8px;

  margin-top: 32px;
  width: 300px;
  height: 50px;

  text-decoration: none;
  color: #FFFFFF;
`;

export const Title2 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  align-self: center;

`;


