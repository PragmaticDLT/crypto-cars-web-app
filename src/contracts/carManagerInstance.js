import contract from "truffle-contract";
import getProvider from "./provider";

// TODO Find better artifacts deploying solution
import carManagerContractArtifact from "../../../crypto-cars-dapp/build/contracts/CarManager.json";
import addresses from "../../../crypto-cars-dapp/build/addresses.json";

const { carManager } = addresses;

export default async function getCarManagerInstance() {
  const carManagerContract = contract(carManagerContractArtifact);
  carManagerContract.setProvider(getProvider());

  return await carManagerContract.at(carManager);
}