import React from "react";
import { Wrapper, CarIcon, CarName } from "./styles";

const Car = ({startColor, endColor, name}) => (
  <Wrapper>
    <CarIcon startColor={startColor} endColor={endColor}/>
    <CarName>{name}</CarName>
  </Wrapper>
);

export default Car;
