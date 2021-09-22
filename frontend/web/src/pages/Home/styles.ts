import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  border-radius: 8px;
  border: none;
  margin-top: 90px;
  width: 752px;
  min-height: 50px;

  background-color: #ffffff;
  color: #9e9e9e;
  font-size: 16;
  font-weight: normal;

  align-self: center;
  justify-self: center;

  padding: 0px 16px;
`;

export const BodyContainer = styled.div`
  width: 1200px;
  align-self: center;

  margin-top: 48px;
  display: flex;
  
  flex-wrap: wrap;
`;

export const PaginationCotainer = styled.div`
  width: 1136px;
  height: 24px;
  display: flex;


  align-items: center;
  justify-content: space-between;
  align-self: center;

`;

export const CountInfo = styled.div`
  font-size: 16px;
  font-weight: bold;

  margin-top: 24px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PaginationItem = styled.div`
  width: 32px;
  height: 32px;

  background-color: #72463B;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: bold;
  color: #FFFFFF;

  margin: 0px 8px;
`;

