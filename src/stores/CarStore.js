'use strict';

import {observable, action, runInAction} from 'mobx';

import { CarManagerAPI, Web3API } from 'apis';

class CarStore {
  @observable cars = [];
  @observable owner = null;

  constructor(CarManagerAPI, Web3API) {
    this.carManagerAPI = CarManagerAPI;
    this.web3API = Web3API;
    this.setOwner();
  }

  setupOwnerCheckTimer = () => {
    this.ownerCheckTimer = setInterval(() => {
      const currentAccount = this.web3API.getCurrentAccount();

      if (this.owner !== currentAccount) {
        this.setOwner();
        this.fetchCars();
      }
    }, 100);
  };

  clearOwnerCheckTimer = () => {
    clearInterval(this.ownerCheckTimer);
  };

  @action
  connectToCarManager = async () => {
    await this.carManagerAPI.connect();

    this.setupOwnerCheckTimer();
    this.fetchCars();
  };

  @action
  setOwner = () => {
    this.owner = this.web3API.getCurrentAccount();
  };

  @action
  fetchCars = async () => {
    const cars = await this.carManagerAPI.fetchCars(this.owner);

    runInAction(() => this.cars = cars);
  };

  @action
  mintCar = async () => {
    if (this.owner) {
      const car = await this.carManagerAPI.mintCar(this.owner);

      runInAction(() => this.cars.push(car));
    } else {
      alert('Please login to your MetaMask account');
    }
  };
}

export default new CarStore(CarManagerAPI, Web3API);
