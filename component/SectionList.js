//学习SectionList 
//网址如下：http://www.jianshu.com/p/6302c4d48b97
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  SectionList,
} from 'react-native';
 
 
 
export default class HomeScreen extends React.Component {
 
  constructor(props) {
    super(props);
    this.state={
      "text":''
    }
  }
 
  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <Text
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }
 
  _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text
      style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt+"999"}</Text>
  }
  //fetch请求
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        alert("数据请求成功");
        this.setState({
          text:"请求成功"
        })
        //return responseJson.movies;
      })
      .catch((error) => {
        alert("数据请求失败");
        console.error(error);
      });
  }
  render() {
    var sections = [
      { key: "A", data: [{ title: "阿童木",key:"1" }, { title: "阿玛尼",key:"2" }, { title: "爱多多",key:"3" }] },
      { key: "B", data: [{ title: "表哥" ,key:"4"}, { title: "贝贝" ,key:"5"}, { title: "表弟",key:"1" }, { title: "表姐" ,key:"1"}, { title: "表叔",key:"1" }] },
      // { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
      // { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];
 
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.state.text}</Text>
        <SectionList
          //renderSectionHeader上面的数据格式是sections这种的，查看网址：
          //http://www.jianshu.com/p/6302c4d48b97
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          //数据源
          sections={sections}
          //行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
          ItemSeparatorComponent={() => <View><Text></Text></View>}
          ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
        />
      </View>
    );
  }
 
}