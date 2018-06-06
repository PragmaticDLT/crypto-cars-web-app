'use strict';

import UserAPI from 'apis/UserAPI';

import config from 'config';
import { delay } from 'utils';

const {INVALID_TOKEN, TOKEN_DOES_NOT_EXIST, OK} = config.auth.statusMap;

export default class AuthService {
  static async login(username) {
    await delay(1000);

    const token = await UserAPI.login(username);

    if (token) {
      localStorage.setItem(config.tokenLocalStorageKey, token);
    }

    return token;
  }

  static async checkAuth() {
    try {
      const existingToken = localStorage.getItem(config.tokenLocalStorageKey);

      if (!existingToken) {
        return {
          status: TOKEN_DOES_NOT_EXIST
        };
      }

      config.authToken = existingToken;

      const data = await this.userAPI.getCurrentUserInfo(existingToken);

      if (data) {
        return {
          status: OK,
          data
        };
      } else {
        return {
          status: INVALID_TOKEN
        };
      }
    } catch(error) {
      return {
        status: INVALID_TOKEN
      };
    }
  }

  static logout() {
    localStorage.removeItem(config.tokenLocalStorageKey);
  }

  static async fetchUsersList() {
    await delay(500);

    return UserAPI.getUsersList();
  }
}
