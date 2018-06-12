"use strict";

import React from "react";

import { Menu } from "./styles";
import MenuItem from "./components/MenuItem";
import garage from "static/images/garage.svg";
import auction from "static/images/auction.svg";

const NavMenu = () => (
  <Menu>
    <MenuItem url={garage} active={true}/>
    <MenuItem url={auction}/>
  </Menu>
);

export default NavMenu;
