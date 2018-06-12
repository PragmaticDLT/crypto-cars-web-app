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
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

export const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 36px;
  color: ${palette.darkGray};

`;

export const CarList = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
`;

export const MetaMaskRemainder = styled.p`
  text-align: center;
`;