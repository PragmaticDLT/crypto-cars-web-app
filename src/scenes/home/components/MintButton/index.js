"use strict";

import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "./style";

@inject("CarStore")
@observer
class MintButton extends React.Component {
  render() {
    const carStore = this.props.CarStore;

    return (
      <Button disabled={!carStore.owner} onClick={carStore.mintCar}>
        Mint Car
      </Button>
    );
  }
}

export default MintButton;