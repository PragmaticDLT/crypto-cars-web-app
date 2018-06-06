import styled from 'styled-components';

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;

  width: 315px;
  
  border: none;  
  border-radius: 2px;
  background-color: #f3f4f6;
  
  > li:not(:last-child) {
    border-bottom: 1px gray solid;
  }
`;

export const Item = styled.li`
  box-sizing: border-box;

  width: 100%;
  height: 60px;
  
  padding: 0 55px;

  font-family: Montserrat;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 60px;
  letter-spacing: normal;
  text-align: left;
  color: #5f5d70;
  
  cursor: ${props => !props.disabled ? 'pointer' : 'auto'};
  
  ${props => !props.disabled && `
    &:hover {
      background-color: #DADBDD;
    }
  `}
  
`;