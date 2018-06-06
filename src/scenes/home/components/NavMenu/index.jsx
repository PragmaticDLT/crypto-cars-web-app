'use strict';

import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import MenuItem from './components/MenuItem';
import user from 'static/images/user.svg';
import { Overlay, Wrapper } from './styles';

@withRouter
@inject('ApplicationStore', 'HomeSceneStore')
@observer
export default class NavMenu extends React.Component {
  logout = event => {
    event.stopPropagation();

    if (confirm('Are you sure, you want to logout?')) {
      this.props.ApplicationStore.logout();
      this.props.history.push('/login');
    }
  };

  render() {
    const { HomeSceneStore, ApplicationStore } = this.props;

    return (
      <Fragment>
        {HomeSceneStore.menuOpened && <Overlay/>}
        <Wrapper onClick={HomeSceneStore.toggleMenu}>
          {ApplicationStore.isAuthenticated && (
            <MenuItem
              clickHandler={this.logout}
              url={user}
              active={false}
            />
          )}
        </Wrapper>
      </Fragment>
    );
  }
}
