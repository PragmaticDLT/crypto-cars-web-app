"use strict";

import React from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { List, Item } from "./styles";

@withRouter
@inject("LoginSceneStore", "ApplicationStore")
@observer
export default class LoginUsersList extends React.Component {
  componentDidMount() {
    if (!this.props.LoginSceneStore.usersList.length) {
      this.props.LoginSceneStore.fetchUsersList();
    }
  }

  chooseUser = async (username) => {
    const { ApplicationStore, LoginSceneStore, history } = this.props;

    await ApplicationStore.login(username);

    ApplicationStore.setAuthenticated();
    LoginSceneStore.toggleUserList();
    history.push("/");
  };

  render() {
    const { usersListFetching, usersList } = this.props.LoginSceneStore;

    return (
      <List>
        {usersListFetching ? (
          <Item disabled>Loading...</Item>
        ) : (
          usersList.length ? (
            usersList.map(user => {
              return <Item onClick={() => this.chooseUser(user.firstName)}>{user.firstName}</Item>;
            })
          ) : (
            <Item disabled>No users found</Item>
          )
        )}
      </List>
    );
  }
};
