'use strict';

import React from 'react';
import { inject, observer } from 'mobx-react';

import {List, Item} from './styles';

@inject('LoginSceneStore', 'ApplicationStore')
@observer
export default class LoginUsersList extends React.Component {
  componentDidMount() {
    if (!this.props.LoginSceneStore.usersList.length) {
      this.props.LoginSceneStore.fetchUsersList();
    }
  }

  chooseUser = async (username) => {
    await this.props.ApplicationStore.login(username);

    this.props.ApplicationStore.setAuthenticated();
    this.props.history.push('/');
  };

  render() {
    const {usersListFetching, usersList} = this.props.LoginSceneStore;

    return (
      <List>
        {usersListFetching ? (
          <Item disabled>Loading...</Item>
        ) : (
          usersList.length ? (
            usersList.map(user => {
              return <Item onClick={() => this.chooseUser(user.firstName)}>{user.firstName}</Item>
            })
          ) : (
            <Item disabled>No users found</Item>
          )
        )}
      </List>
    );
  }
};
