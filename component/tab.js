import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
//导入react-native-tab-navigator方式：
//cmd项目路径下执行npm install react-native-tab-navigator --save
import TabNavigator from 'react-native-tab-navigator';
import SectionList from "./SectionList.js";
import Swiper from "./swiper.js";
import NavMenu from "./NavMenu.js";
export default class Tabnavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Event'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'Event'}
                        //标题
                        title="SectionList"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon} source={require("../styles/images/default.png")} />}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'red'}]} source={require("../styles/images/select.png")} />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'Event' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>列表使用与数据请求</Text>
                            <SectionList />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Log'}
                        title="Swiper"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../styles/images/default.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon,{tintColor:'red'}]} source={require("../styles/images/select.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Log' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>Swiper使用</Text>
                            <Swiper />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Device'}
                        title="navigator"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../styles/images/default.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'red'}]} source={require("../styles/images/select.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Device' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>navigator路由的使用</Text>
                            <NavMenu navigator={this.props.navigator}/>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});