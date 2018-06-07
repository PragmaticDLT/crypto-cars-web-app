'use strict';

import React from 'react';
import { inject, observer } from 'mobx-react';

import NavMenu from './components/NavMenu';
import Car from './components/Car';
import { Container, Wrapper, Heading, CenterContent, MintButton, CarList } from './styles';

@inject('CarStore')
@observer
export default class Home extends React.Component {
  componentDidMount() {
    this.props.CarStore.setDefaultOwner();
  }

  render() {
    const carStore = this.props.CarStore;

    return (
      <Container>
        <NavMenu/>
        <Wrapper>
          <Heading>Car Auction</Heading>
          <CenterContent>
            <MintButton onClick={carStore.mintCar}>Mint Car</MintButton>
          </CenterContent>
          <CarList>
            {carStore.cars.map(car => <Car key={`${car[0]}-${car[1]}`} name={car[0]} startColor={car[1]} endColor={car[2]}/>)}
          </CarList>
        </Wrapper>
      </Container>
    );
  }
}
