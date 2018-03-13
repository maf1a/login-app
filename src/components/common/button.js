import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ payloadFunction, children }) => {
  return (
    <TouchableOpacity
      onPress={ payloadFunction }
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{ children }</Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aaf',
    fontSize: 18,
    fontWeight: '600',
    padding:10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aaf',
    marginHorizontal: 5,
  }
}

export {Button};
