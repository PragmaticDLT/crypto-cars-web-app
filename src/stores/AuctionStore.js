'use strict';

import {action,  observable} from 'mobx';

class AuctionStore {
  @observable carAuctionInstance = null;
  @observable cars = [];

  @action
  addCarToAuction = (car) => {
    this.cars = [...this.cars, car];
  };

  @action
  createAuction = async (carId) => {
    await this.carAuctionInstance.createAuction(carId, 10, {
      gas: 170000
    });
  };

}

export default new AuctionStore();
