import styled from "styled-components";
import { palette } from 'static/theme';
import car from 'static/images/car.svg';

export const Wrapper = styled.div`
  min-width: 200px;
  margin: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.3);
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const CarName = styled.h3`
  font-size: 16px;
  color: ${palette.darkGray};
`;

export const SellButton = styled.button`
  margin: 0;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 2px;
  background-color: ${palette.green};
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    background-color: ${palette.darkGreen};
  }
`;

export const CarIcon = styled.div`
  height: 150px;

  mask: url(${car});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  
  background: linear-gradient(to right, ${props => props.startColor}, ${props => props.endColor});
  background-repeat: no-repeat;
  background-position: center center;
`;

