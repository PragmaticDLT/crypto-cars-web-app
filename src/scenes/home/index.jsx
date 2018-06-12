"use strict";

import React from "react";
import { inject, observer } from "mobx-react";

import NavMenu from "./components/NavMenu";
import MintButton from "./components/MintButton";
import Car from "./components/Car";
import { Container, Wrapper, Heading, CarList, MetaMaskRemainder } from "./styles";

@inject("CarStore")
@observer
export default class Home extends React.Component {
  componentDidMount() {
    this.props.CarStore.connectToCarManager();
  }

  componentWillUnmount() {
    this.props.CarStore.clearOwnerCheckTimer();
  }

  render() {
    const carStore = this.props.CarStore;

    return (
      <Container>
        <NavMenu/>

        <Wrapper>
          <Heading>Car Auction</Heading>
          <MintButton/>
          {!carStore.owner &&
            <MetaMaskRemainder>
              To use our app please login or create <a href="https://metamask.io/">MetaMask</a> account.
            </MetaMaskRemainder>
          }
          {carStore.owner && (
            <CarList>
              {carStore.cars.map(car =>
                <Car
                  key={`${car[0]}-${car[1]}`}
                  name={car[0]}
                  startColor={car[1]}
                  endColor={car[2]}
                />
              )}
            </CarList>
          )}
        </Wrapper>
      </Container>
    );
  }
}
