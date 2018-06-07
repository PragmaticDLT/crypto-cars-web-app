'use strict';

import {observable, action, runInAction} from 'mobx';
import CarManagerAPI from 'apis/CarManagerAPI';

class CarStore {
  @observable cars = [];
  @observable owner = null;

  constructor(carManagerAPI) {
    this.carManagerAPI = carManagerAPI;
  }

  @action
  setDefaultOwner = async () => {
    const owner = await this.carManagerAPI.getDefaultOwner();

    runInAction(() => this.owner = owner);

    this.fetchCars();
  };

  @action
  fetchCars = async () => {
    const cars = await this.carManagerAPI.fetchCars(this.owner);

    runInAction(() => this.cars = cars);
  };

  @action
  mintCar = async () => {
    const car = await this.carManagerAPI.mintCar(this.owner);

    runInAction(() => this.cars.push(car));
  };
}

export default new CarStore(CarManagerAPI);
