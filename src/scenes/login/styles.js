import styled from "styled-components";
import passwordIcon from "static/images/password.svg";
import userIco from "static/images/user-gray.svg";
import caretIcon from 'static/images/caret-down.svg';
import {palette} from "static/theme";

export const Container = styled.div`
  width: 500px;
  height: 350px;
  
  background-color: #ffffff;
  box-shadow: 0 2px 25px 0 rgba(129, 129, 143, 0.07);
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputHolder = styled.div`
  position: relative;
  margin-bottom: 6px;
  
  width: 315px;
  height: 60px;
`;

export const Icon = styled.div`
  background-repeat: no-repeat;
  background-position: center center;

  width: 20px;
  height: 20px;
 
  position:absolute;
  z-index: 1000; 
  

  margin-top: 20px;
  margin-bottom: 20px;

  background-size: 100% 100%;
`;

export const UserIcon = Icon.extend`
  margin-left: 20px;
  margin-right: 10px;
  background-image: url(${userIco});
`;

export const PasswordIcon = Icon.extend`
  background-image: url(${passwordIcon});
`;

export const ToggleLoginListButton = Icon.extend`
  position: absolute;
  top: 0;
  right: 0;
  
  margin-left: 10px;
  margin-right: 20px;
  
  background-image: url(${caretIcon});

  transform: rotate(${props => props.listOpened ? '180' : '0'}deg); 
  transition: transform 300ms;
  
  cursor: pointer;
`;

export const Input = styled.input`
  box-sizing: border-box;

  position: absolute;

  border: none;  
  border-radius: 2px;
  background-color: #f3f4f6;
  opacity: 0.9;
  z-index: 100;
  padding: 0 55px;
  
  width: 100%;
  height: 60px;

  font-family: Montserrat;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #5f5d70;
`;

export const LoginButton = styled.button`
  display:block;
  outline: none;
  width: 240px;
  height: 48px;
  border-radius: 100px;
  background-color: ${palette.blue};
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.18);
  margin-top: 30px;
  cursor: pointer;
  
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.69;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;

  ${props => props.status === true ? 'opacity: 0.5;' : ''}

  &:hover {
    opacity: 0.9;
    ${props => props.status === true ? 'opacity: 0.5;' : ''}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(240, 241, 244, 0.9);
`;
