import React,{ Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native';

const { width,height} = Dimensions.get('window');
class Splash extends Component {
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../image/logo/logo.png')} />
                </View>
                <View style={styles.copyrightWrapper}>
                    <Image style={styles.copyright} source={require('../image/logo/copyright.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        wrapper:{
            width:width,
            height:height,
            justifyContent:'center',
            alignItems:'center'
        },
        logo:{
           width:134,
           height:140,
           resizeMode:'cover'
        },
        logoWrapper:{
            marginBottom:20,
            alignItems:'center'
        },
        copyright:{
            width:130,
            height:27,
            resizeMode:'cover'
        },
        copyrightWrapper:{
            position:'absolute',
            bottom:40,
            justifyContent:'center'
        }
});

export default Splash;