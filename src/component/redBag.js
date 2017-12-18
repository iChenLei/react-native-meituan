import React,{ Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');


class RedBag extends Component{
    render(){
        return (
                <View style={styles.hongbaoWrapper}>
                    <Image source={require('../image/banner/hongbao.webp')} style={styles.hongBao}/>
                </View>    
        )
    }
}

const styles = StyleSheet.create({
    hongBao:{
        width:width-10,
        height:80,
        resizeMode:"cover"
    },
    hongbaoWrapper:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        padding:4
    }
}) 

export default RedBag;