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
  width: 100%;
  height: 100%;
`;

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MintButton = styled.div`
  background-color: ${palette.green};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
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