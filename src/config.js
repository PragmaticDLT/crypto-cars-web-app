'use strict';

const INVALID_TOKEN = 'has_invalid_token';
const TOKEN_DOES_NOT_EXIST = 'token_does_not_exists';
const OK = 'ok';

export default {
  displayDevTools: process.env.NODE_ENV !== 'production',
  API:
    process.env.NODE_ENV === 'production'
      ? 'http://xxx.com'
      : 'http://localhost:3933',
  authToken: null,
  tokenLocalStorageKey: 'LexusLXBMWX6MMercedesS65AMG',
  auth: {
    statusMap: {INVALID_TOKEN, TOKEN_DOES_NOT_EXIST, OK}
  },
  web3: {
    provider: "http://localhost:7545"
  }
};
