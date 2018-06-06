'use strict';

import React from 'react';
import { inject, observer } from 'mobx-react';

import NavMenu from './components/NavMenu';
import { Container, Wrapper } from './styles';

@inject('UserDataStore')
@observer
export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <NavMenu/>
        <Wrapper>
          You are logged in as {this.props.UserDataStore.firstName}.
        </Wrapper>
      </Container>
    );
  }
}
