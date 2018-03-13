import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return(
    <View style={styles}>
      <ActivityIndicator size={ size || 'small' } />
    </View>
  );
};

const styles = {
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center'
}

export { Spinner }
