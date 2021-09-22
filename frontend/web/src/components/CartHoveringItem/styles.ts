import styled from "styled-components";

export const Container = styled.div`
  width: 296px;
  height: 40px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 16px;
  padding-top: 32px;
`;

export const ItemName = styled.h1`
  font-size: 14px;
  font-weight: normal;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  width: 100px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: normal;
`;

export const Amount = styled.div`
  font-size: 14px;
  font-weight: normal;
`;
