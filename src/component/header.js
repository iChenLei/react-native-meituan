import React,{ Component } from "react";
import {
     Image,
     Text,
     View,
     StyleSheet,
     Dimensions
} from "react-native";

const {width,height} = Dimensions.get('window');

class Header extends Component{
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.left}>
                    <Image source={require('../image/location/pin01.png')} style={styles.locationImg}/>
                    <Text style={styles.locationText}>成都国际节能科技大厦A...></Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.weatherText}>阴</Text>
                    <Image source={require('../image/weather/cloud.png')}  style={styles.weatherImg}/>
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
       wrapper:{
            backgroundColor:'#ffd700',
            width:width,
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'flex-end',
            paddingRight:10,
            paddingLeft:10,
            paddingTop:10
       },
       left:{
            flexDirection:'row',
            alignItems:'center'             
       },
       right:{
            flexDirection:'row',
            alignItems:'center'
       },
       locationImg:{
            width:20,
            height:20
       },
       locationText:{
            fontSize:15
       },
       weatherImg:{
            width:20,
            height:20,
            marginLeft:5
       },
       weatherText:{
            fontSize:15
       }

});

export default Header;