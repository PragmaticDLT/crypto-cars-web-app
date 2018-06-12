'use strict';

export default {
  displayDevTools: process.env.NODE_ENV !== 'production',
  API:
    process.env.NODE_ENV === 'production'
      ? 'http://xxx.com'
      : 'http://localhost:3933',
  authToken: null,
  web3: {
    provider: "http://localhost:7545"
  }
};
