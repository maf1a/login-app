import React, { Component } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from  './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password, loading } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => this.onLoginSuccess())
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => this.onLoginFailed())
    })
  };

  onLoginFailed() {
    Alert.alert('login failed');
    this.setState({
      email: '',
      password: '',
      error: 'Authentication failed',
      loading: false
    })
  }

  onLoginSuccess() {
    Alert.alert('login succeeded');
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner />
    }
    return <Button payloadFunction={() => this.onButtonPress()}>Log in</Button>
  }

  render() {
    const { email, password, error } = this.state;

    return(
      <Card>
        <CardSection>
          <Input
            onchangeText={email => this.setState({ email })}
            value={ email }
            placeholder="user@gmail.com"
            autocorrect={false}
            label="Email :" />
        </CardSection>
        <CardSection>
          <Input
            onchangeText={password => this.setState({ password })}
            value={ password }
            placeholder="password"
            autocorrect={false}
            secureTextEntry
            label="Password : " />
        </CardSection>
        <CardSection>
          <Text style={styles.errorTextStyle}>{error}</Text>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    padding: 5,
    paddingBottom:10,
    fontSize:20,
    color: 'red',
    alignSelf:'center'
  }
}

export default LoginForm;
