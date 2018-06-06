'use strict';

import {observable, action, runInAction} from 'mobx';
import getCarManagerInstance from 'contracts/carManagerInstance';
import randomColor from 'utils/randomColor';

class CarStore {
  @observable carManagerInstance = null;
  @observable cars = [];
  @observable owner = null;
  @observable isLoading = true;

  constructor() {
    this.setup();
  }

  @action
  setup = async () => {
    const carManagerInstance = await getCarManagerInstance();

    runInAction(() => this.carManagerInstance = carManagerInstance);
    const owner = await carManagerInstance.owner();
    runInAction(() => this.owner = owner);

    this.fetchCars();
  };

  @action
  fetchCars = async () => {
    const carIds = await this.carManagerInstance.getCarIds(this.owner);

    if (!carIds.length) {
      return;
    }

    const cars = await Promise.all(
      carIds.map(async id => {
        return this.carManagerInstance.getCarById(id);
      })
    );

    runInAction(() => this.cars.replace(cars));
  };

  @action
  mintCar = async () => {
    const gradient = [randomColor(), randomColor()];
    await this.carManagerInstance.createNewCar('Octavia RS', gradient[0], gradient[1], {
      from: this.owner,
      gas: 170000
    });
    runInAction(() => this.cars.push(['Octavia RS', gradient[0], gradient[1]]));
  };
}

export default new CarStore();
