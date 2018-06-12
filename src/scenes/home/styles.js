import styled from 'styled-components';
import { palette } from 'static/theme';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: stretch;
   
   width: 100%;
   height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Heading = styled.h1`
  margin-top: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 42px;
  font-weight: bold;
  color: ${palette.darkGray};

`;

export const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const MetaMaskRemainder = styled.p`
  text-align: center;
`;