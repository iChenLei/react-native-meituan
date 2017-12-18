import React,{ Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import BannerItem from "../element/bannerItem";
import BannerConfig from "../mockdata/image_banner";
import Swiper from "react-native-swiper";
const {width,height} = Dimensions.get('window');

class Banner extends Component{

    constructor(){
        super();
        this.state = {
            swiperShow:false,
        };
    }

    //这里是处理react-native-swiper在scrollerView下不显示图片的Bug
    //http://blog.csdn.net/qq_31280709/article/details/73441330
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }

    render(){

        if(this.state.swiperShow){
            return (
                <Swiper autoplay={true} style={styles.swiper} 
                    paginationStyle={{
                            bottom: 10
                        }}
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 7, height: 7, borderRadius: 3, marginLeft: 3, marginRight: 3}} />}
                        activeDot={<View style={{backgroundColor: '#ffff00', width: 7, height: 7, borderRadius: 3, marginLeft: 3, marginRight: 3}} />}>
                    {
                        BannerConfig.map((data,key)=>(
                            <View style={styles.tempView} key={key}>
                                <BannerItem key={key} img={data.path} />
                            </View>    
                        ))
                    }
                </Swiper>         
            )
        }else{
            return (
                <View style={styles.tempView}>
                    <Image source={require("../image/banner/banner01.jpg")} style={styles.tempImage}/>
                </View>
            )    
        }
    }
}

const styles = StyleSheet.create({
    imageWrapper:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    swiper:{
        width:width,
        height:90
    },
    tempImage:{
        width:width-20,
        height:80,
        resizeMode:"cover"
    },
     tempView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
     }
})

export default Banner;