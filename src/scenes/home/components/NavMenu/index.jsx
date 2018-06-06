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
  logout = () => {
    if (confirm('Are you sure, you want to logout?')) {
      this.props.ApplicationStore.logout();
      location.push('/');
    }
  };

  render() {

    return (
      <Fragment>
        {this.props.HomeSceneStore.menuOpened && <Overlay/>}
        <Wrapper onClick={this.props.HomeSceneStore.toggleMenu}>
          {this.props.ApplicationStore.isAuthenticated && (
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
