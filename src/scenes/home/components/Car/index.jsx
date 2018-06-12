"use strict";

import React from "react";
import { Wrapper, Header, CarName, SellButton, CarIcon} from "./styles";

const Car = ({startColor, endColor, name}) => (
  <Wrapper>
    <Header>
      <CarName>{name}</CarName>
      <SellButton onClick={() => alert('Sorry, this functionality is not implemented yet.')}>sell</SellButton>
    </Header>
    <CarIcon startColor={startColor} endColor={endColor}/>
  </Wrapper>
);

export default Car;
