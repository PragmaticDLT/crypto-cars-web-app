"use strict";

import contract from "truffle-contract";
import Web3 from "web3";

import config from "config";

// TODO Find better artifacts deploying solution
import carManagerContractArtifact from "../../../crypto-cars-dapp/build/contracts/CarManager.json";
import addresses from "../../../crypto-cars-dapp/build/addresses.json";

const { carManager } = addresses;

export default function getCarManagerInstance() {
  const carManagerContract = contract(carManagerContractArtifact);
  carManagerContract.setProvider(new Web3.providers.HttpProvider(config.web3.provider));

  return carManagerContract.at(carManager);
}