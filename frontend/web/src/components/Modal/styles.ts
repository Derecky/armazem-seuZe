import styled from "styled-components";

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

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const ContainerModal = styled.div`
  width: 756px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 50px;

  border-radius: 16px;

`;

export const Title = styled.h1`

`;

export const Image = styled.img`
  margin: 40px 0px;
`;

export const ButtonContainer = styled.div`

`;

export const CloseButton = styled.button`
  background-color: #F13D3C;
  width: 400px;
  height: 50px;

  color: #FFFFFF;

  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;

  transition: background-color 0.3s;
  &:hover{
    background-color: #AA702B;
  }
`;

