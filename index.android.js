/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TouchableHighlight} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Tab from "./component/tab.js";

class reactNative extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ message: '初始页面', component:Tab}}
        renderScene={ (route, navigator) => {
           let Component = route.component;
            return <Component navigator={navigator} />
        }}
         configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
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

AppRegistry.registerComponent('reactNative', () => reactNative);
