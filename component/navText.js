import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TouchableHighlight} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
export default class NavText extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5">
        <Text style={styles.buttonText}>{"你好"}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
   },
   messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
});