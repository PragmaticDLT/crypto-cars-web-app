'use strict';

import { action, observable, runInAction} from 'mobx';

import AuthService from 'core/auth'

class LoginSceneStore {
  @observable usersList = [];
  @observable usersListFetching = false;
  @observable usersListOpened = false;

  @action
  toggleUserList = () => {
    this.usersListOpened = !this.usersListOpened;
  };

  @action
  fetchUsersList = async () => {
    let usersList;

    runInAction(() => this.usersListFetching = true);
    usersList = await AuthService.fetchUsersList();
    runInAction(() => {
      this.usersList = usersList;
      this.usersListFetching = false
    });
  }
}

export default new LoginSceneStore();