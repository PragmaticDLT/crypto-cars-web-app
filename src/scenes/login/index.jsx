'use strict';

import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import LoginUserList from './components/LoginUsersList';
import { Container, Input, InputHolder, LoginButton, PasswordIcon, UserIcon, Wrapper, ToggleLoginListButton } from './styles';

@withRouter
@inject('ApplicationStore', 'LoginSceneStore')
@observer
export default class Login extends React.Component {
  componentDidMount() {
    if (this.props.ApplicationStore.isAuthenticated) {
      return this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.ApplicationStore.isAuthenticated) {
      return this.props.history.push('/');
    }
  }

  login = async () => {
    const login = this.userLogin.value.trim();
    // const password = this.userPassword.value.trim();

    if (!login) {
      return alert('Enter username');
    }

    const token = await this.props.ApplicationStore.login(login/*, password*/);

    if (token) {
      this.props.ApplicationStore.setAuthenticated();
      this.props.history.push('/');
    } else {
      return alert('No such user.');
    }
  };

  loginOnEnter = event => {
    if (event.keyCode === 13) {
      this.login()
    }
  };

  toggleUserList = () => {
    this.props.LoginSceneStore.toggleUserList();
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <InputHolder>
            <UserIcon/>
            <Input
              innerRef={element => (this.userLogin = element)}
              placeholder={'Login'}
              onKeyUp={this.loginOnEnter}
              defaultValue={'John'}
            />
            <ToggleLoginListButton
              listOpened={this.props.LoginSceneStore.usersListOpened}
              onClick={this.toggleUserList}
            />
            {this.props.LoginSceneStore.usersListOpened && <LoginUserList/>}
          </InputHolder>
          {/*<InputHolder>
            <PasswordIcon />
            <Input
              type={'Password'}
              innerRef={element => (this.userPassword = element)}
              placeholder={'Пароль'}
              onKeyUp={this.loginOnEnter}
            />
          </InputHolder>*/}
          <LoginButton
            status={this.props.ApplicationStore.appLoading}
            onClick={this.login}
          >
            Sign In
          </LoginButton>
        </Container>
      </Wrapper>
    );
  }
}
