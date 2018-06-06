'use strict';

import { action, observable, runInAction } from 'mobx';

import AuthService from 'core/auth';

class ApplicationStore {
  @observable appLoading = false;
  @observable isAuthenticated = false;

  @action
  setAuthenticated = () => {
    console.log('Auth successful');
    this.isAuthenticated = true;
  };

  @action
  login = async (username) => {
    runInAction(() => this.appLoading = true);
    const token = await AuthService.login(username);
    runInAction(() => this.appLoading = false);

    return token;
  };

  @action
  logout = async () => {
    this.isAuthenticated = false;

    AuthService.logout();
  };
}

export default new ApplicationStore();