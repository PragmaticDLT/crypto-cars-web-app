"use strict";

import styled from "styled-components";
import { palette } from 'static/theme';

export const Item = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 8px;
  cursor: pointer;
  background-color: ${props => props.active ? palette.white : 'none'};

  &:hover {
    background-color: ${props => props.active ? 'none' : palette.darkGreen};
  }
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  
  background-repeat: no-repeat;
  background-position: center center;

  mask: url(${props => props.url});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  
  background-color: ${props => props.active ? palette.green : palette.white};
`;
