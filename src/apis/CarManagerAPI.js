"use strict";

import Promise from "bluebird/js/release/bluebird";
import Web3API from "./Web3API";

import getCarManagerInstance from "contracts/carManagerInstance";
import randomColor from "utils/randomColor";

class CarManagerAPI {
  constructor() {
    this.carManager = null;
  };

  connect = async () => {
    this.carManager = await getCarManagerInstance();
  };

  fetchCars = async owner => {
    const carIds = await this.carManager.getCarIds(owner);

    if (!carIds || !carIds.length) {
      return [];
    }

    return Promise.map(carIds, async id => {
      const car = await this.carManager.getCarById(id);

      return {
        id: id.toString(),
        name: car[0],
        startColor: car[1],
        endColor: car[2]
      };
    });
  };

  mintCar = async owner => {
    try {
      const gradient = [randomColor(), randomColor()];

      await this.carManager.createNewCar("Octavia RS", gradient[0], gradient[1], {
        from: owner,
        value: Web3API.web3.toWei(1, "ether"),
        gas: 1000000
      });

      return ["Octavia RS", gradient[0], gradient[1]];
    } catch (error) {
      console.error("Mint Car failed: ", error);
    }
  };
}

export default new CarManagerAPI();