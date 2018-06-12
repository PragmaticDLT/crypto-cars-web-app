"use strict";

import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Wrapper, Header, CarName, SellButton, CarIcon} from "./styles";

const Car = inject("AuctionStore")(observer(({car, AuctionStore}) => (
  <Wrapper>
    <Header>
      <CarName>{car.name}</CarName>
      <SellButton onClick={AuctionStore.addCarToAuction}>
        sell
      </SellButton>
    </Header>
    <CarIcon startColor={car.startColor} endColor={car.endColor}/>
  </Wrapper>
)));

Car.propTypes = {
  car: PropTypes.object.isRequired
};

export default Car;
