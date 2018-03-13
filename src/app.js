import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/login-form';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqLQxKMdO6p8LLXAztpXLll7VLE7sbb2U',
      authDomain: 'auth-app-7744c.firebaseapp.com',
      databaseURL: 'https://auth-app-7744c.firebaseio.com',
      projectId: 'auth-app-7744c',
      storageBucket: 'auth-app-7744c.appspot.com',
      messagingSenderId: '459797051176'
    });

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false});
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button payloadFunction={() => {
          this.setState({loggedIn: false});
          firebase.auth().signOut();
        }}>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return(
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
