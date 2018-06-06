import styled from "styled-components";
import { palette } from 'static/theme';
import car from 'static/images/car.svg';

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  cursor: pointer;
`;

export const CarIcon = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  width: 100px;
  height: 100px;
  position:absolute;
  z-index: 2; 
 
  mask: url(${car});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  
  background: linear-gradient(to right, ${props => props.startColor}, ${props => props.endColor});
`;

export const CarName = styled.div`
  font-size: 14px;
  color: ${palette.darkGray};
  text-align: center;
`;