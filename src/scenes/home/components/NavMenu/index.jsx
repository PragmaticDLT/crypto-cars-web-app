'use strict';

import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';

import { Overlay, Menu } from './styles';

@inject('HomeSceneStore')
@observer
export default class NavMenu extends React.Component {
  render() {
    const { HomeSceneStore} = this.props;

    return (
      <Fragment>
        {HomeSceneStore.menuOpened && <Overlay/>}
        <Menu onClick={HomeSceneStore.toggleMenu}/>
      </Fragment>
    );
  }
}
