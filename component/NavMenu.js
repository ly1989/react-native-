import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TouchableHighlight} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import NavText from "./navText.js";
import NavButton from "./NavButton.js";
export default class NavMenu extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text style={styles.messageText}>{this.props.message}</Text>
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: '向右拖拽关闭页面',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
             
            });
          }}
          text="从右边向左切入页面(带有透明度变化)"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: '向下拖拽关闭页面',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
              component: NavText,
            });
          }}
          navigator = {this.props.navigator}
          text="从下往上切入页面(带有透明度变化)"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="页面弹出(回退一页)"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          }}
          text="页面弹出(回退到最后一页)"
        />
      </View>
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