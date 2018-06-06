'use strict';

import { basicGETRequest } from "./utils";

class UserAPI {

  getUsers = () => {
    return users;
  };

  getCurrentUserInfo = (token) => {
    return users[token]
  };

  login = (username) => {
    const resp = users[`${username.toLowerCase()}_token`];

    return resp ? resp.token : null;
  };

  getUsersList = () => {
    return Object.values(users)
  }
}

export default new UserAPI();

const users = {
  test_token: {
    id: 1,
    email: 'test_user@gmail.com',
    firstName: 'Test',
    lastName: 'User',
    username: 'test_user',
    token: 'test_token'
  },
  john_token: {
    id: 1,
    email: 'john_doe@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
    username: 'john_doe',
    token: 'john_token'
  }
};
