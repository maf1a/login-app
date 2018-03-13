import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onchangeText,
  autocorrect,
  placeholder,
  secureTextEntry
}) => {
  const {
    inputStyle,
    labelStyle,
    containerStyle,
  } = style;
  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
        placeholder={placeholder}
        autocorrect={autocorrect}
        style={inputStyle}
        onChangeText={ onchangeText }
        value={ value }
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const style = {
  inputStyle: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft:20,
    flex: 1
  },
  containerStyle: {
    height: 60,
    width: null,
    flexDirection: 'row',
    alignItems:'center'
  }
}

export { Input };
