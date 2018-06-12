import styled from 'styled-components';
import { palette } from 'static/theme';

export const Button = styled.div`
  margin-top: 40px;
  background-color: ${palette.green};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  transition: all 300ms;
  
  &:hover {
    background-color: ${palette.darkGreen}
  }
`;