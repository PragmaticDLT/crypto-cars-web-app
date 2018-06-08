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

export const MintButton = styled.div`
  margin: 0 auto;
  background-color: ${palette.green};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  
  &:active {
    box-shadow: 0 0px 2px ${palette.green};
  }
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