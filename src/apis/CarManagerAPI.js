'use strict';

import Promise from "bluebird/js/release/bluebird";
import getCarManagerInstance from 'contracts/carManagerInstance';
import randomColor from 'utils/randomColor';

class CarManagerAPI {
  constructor() {
    this.carManager = null;
  };

  connect = async () => {
    this.carManager = await getCarManagerInstance();
  };

  fetchCars = async owner => {
    const carIds = await this.carManager.getCarIds(owner);

    if (!carIds.length) {
      return [];
    }

    return Promise.map(carIds, id => {
      return this.carManager.getCarById(id);
    });
  };

  mintCar = async owner => {
    const gradient = [randomColor(), randomColor()];

    await this.carManager.createNewCar('Octavia RS', gradient[0], gradient[1], {
      from: owner,
      gas: 170000
    });

    return ['Octavia RS', gradient[0], gradient[1]];
  };
}

export default new CarManagerAPI();