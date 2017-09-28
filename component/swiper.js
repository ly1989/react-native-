import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class ImgSwiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }
    //在安卓机下，
    //如果用到了可滚动组件例如SectionList,
    //ScrollView或者TabNavigator这种可滑动的组建，
    //swiper都无法正确显示，解决办法是设置setTimeout。   
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }

    render() {
        if(this.state.swiperShow){ 
            return(
                <Swiper style={styles.imgWrapper}  height={200} 
                    showsButtons={true} autoplay={true}
                >
                    <View style={styles.imgView}>
                        <Image source={ require('../styles/images/banner.jpg')} style={styles.bannerImg} />
                    </View>
                    <View style={styles.imgView}>
                        <Image source={ require('../styles/images/banner.jpg')} style={styles.bannerImg} />
                    </View>
                    <View style={styles.imgView}>
                        <Image source={ require('../styles/images/banner.jpg')} style={styles.bannerImg} />
                    </View>
                    <View style={styles.imgView}>
                        <Image source={ require('../styles/images/banner.jpg')} style={styles.bannerImg} />
                    </View>       
                </Swiper>
            )
        }else {
            return (
                <View style={{height:200}}>
                        <Image source={ require('../styles/images/banner.jpg')} style={styles.bannerImg} />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    imgWrapper: {
        width: '100%',
        height: 200,
    },
    imgView: {
        flex: 1,
        height: 200,
    },
    bannerImg: {
        width: '100%',
        height: 200,
        flex: 1
    }
})