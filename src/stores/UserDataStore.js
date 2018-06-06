import {observable, action} from 'mobx';

class UserDataStore {
  @observable id;
  @observable email;
  @observable firstName;
  @observable lastName;
  @observable username;

  @action
  setUserData(id, email, firstName, lastName, username) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }
}

export default new UserDataStore();
