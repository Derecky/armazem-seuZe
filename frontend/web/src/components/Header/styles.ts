import styled from "styled-components";


export const Container = styled.div`
  height: 100px;
  width: 100vw;
  background-color: #72463B;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderField = styled.div`
  width: 1136px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const FieldText = styled.div`
  display: flex;

  align-items: center;
`;


export const Text1 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

export const Text2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`;

export const Text3 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #F13D3C;
`;

export const Text4 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #F13D3C;

  margin-top: -10px;

  font-family: "Poppins";
`;

export const ImageContainer = styled.div`
  height: 50px;
  display: flex;
  width: 50px;

  justify-self: flex-end;

`;

export const Bullet = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #F2A03D;

  position: absolute;

  margin-left: 35px;

  z-index: 2;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: bold;
  color: #FFFFFF;
  
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: absolute;
  z-index: 1;

  margin-left: 865px;
  top: 50px;


`;


export const ShowCartList =  styled.div`
  width: 300px;
  //max-height: 300px;


  background-color: #FFFFFF;
  border-radius: 8px;

  padding-bottom: 24px;

  overflow-y: auto;

  
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  margin-top: 24px;
  margin-left: 16px;
`;


export const Arrow = styled.div`
  width: 30px;
  height: 20px;

  margin-right: 20px;

  border-width: 15px;
  border-style: solid;
  border-color: transparent transparent #FFFFFF transparent;
`;