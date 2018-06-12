"use strict";

import React from "react";
import PropTypes from "prop-types";
import { Icon, Item } from "./styles";

const MenuItem = ({url, clickHandler, active}) => (
  <Item onClick={clickHandler} active={active}>
    <Icon url={url} active={active}/>
  </Item>
);

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  active: PropTypes.bool
};

export default MenuItem;
