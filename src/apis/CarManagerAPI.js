'use strict';

import getCarManagerInstance from 'contracts/carManagerInstance';
import randomColor from 'utils/randomColor';

class CarManagerAPI {
  constructor() {
    this.carManager = null;

    this.setup();
  };

  setup = async () => {
    this.carManager = await getCarManagerInstance();
  };

  fetchCars = async owner => {
    const carIds = await this.carManager.getCarIds(owner);

    if (!carIds.length) {
      return;
    }

    return Promise.all(
      carIds.map(async id => {
        return this.carManager.getCarById(id);
      })
    );
  };

  mintCar = async owner => {
    const gradient = [randomColor(), randomColor()];

    await this.carManager.createNewCar('Octavia RS', gradient[0], gradient[1], {
      from: owner,
      gas: 170000
    });

    return ['Octavia RS', gradient[0], gradient[1]];
  };

  getDefaultOwner = async () => {
    return this.carManager.owner();
  }
}

export default new CarManagerAPI();