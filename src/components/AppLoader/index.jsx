"use strict";

import React, { Fragment } from "react";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";

import config from "config";
import AuthService from "core/auth";
import App from "components/App";
import Spinner from "components/Spinner";

const { INVALID_TOKEN, TOKEN_DOES_NOT_EXIST, OK } = config.auth.statusMap;

@withRouter
@inject("ApplicationStore", "UserDataStore")
@observer
export default class AppLoader extends React.Component {
  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    const auth = await AuthService.checkAuth();

    switch (auth.status) {
      case OK: {
        this.props.UserDataStore.setUserData(
          auth.data.id,
          auth.data.email,
          auth.data.firstName,
          auth.data.lastName,
          auth.data.username
        );
        this.props.ApplicationStore.setAuthenticated();
        break;
      }
      case TOKEN_DOES_NOT_EXIST: {
        this.props.history.push("/login");
        break;
      }
      case INVALID_TOKEN:
      default: {
        this.props.ApplicationStore.logout();
        location.reload();
        break;
      }
    }
  };

  render() {
    return (
      <Fragment>
        {this.props.ApplicationStore.appLoading && <Spinner/>}
        <App/>;
      </Fragment>
    )
  }
}
