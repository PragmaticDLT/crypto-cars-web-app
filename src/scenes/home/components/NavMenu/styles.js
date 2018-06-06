'use strict';

import styled from 'styled-components';

import { palette } from 'static/theme';

export const Wrapper = styled.div`
    height: 100%;
    background-color: ${palette.green};
    overflow-x: hidden;
    transition: 0.3s; 
    user-select: none;
    cursor: pointer;
`;

export const Overlay = styled.div`
    width: 40%; 
    height: 100%;
`;


