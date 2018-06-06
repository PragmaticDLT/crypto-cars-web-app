'use strict';

import config from '../config';

const getOptions = (method) => ({
  method,
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const extendWithAuthToken = (options, token) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${token}`
  }
});

const basicGETRequest = async (path) => {
  try {
    const url = `${config.API}/${path}`;
    const options = extendWithAuthToken(getOptions('GET'), config.authToken);
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.response && data.response.code === 'SUCCESS') {
      return data.response.data;
    } else {
      return false;
    }
  } catch(error) {
    console.error('basicGETRequest error', path, error);

    return false;
  }
};

const basicPOSTRequest = async (path, body) => {
  try {
    const url = `${config.API}/${path}`;
    const options = extendWithAuthToken(getOptions('POST'), config.authToken);
    options.body = body;
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.response && data.response.code === 'SUCCESS') {
      return data.response.data;
    } else {
      return false;
    }
  } catch(error) {
    console.error('basicPOSTRequest error', path, error);

    return false;
  }
};


export { basicGETRequest, basicPOSTRequest };
