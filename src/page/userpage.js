/*
*  @flow
*/
import React,{ Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

const { width, height } = Dimensions.get('window');
class UserPage extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                   <View style={styles.set}>  
                       <Image style={styles.set_icon} source={require('../image/user/setting.png')}/>
                       <Image style={styles.set_icon} source={require('../image/user/message.png')}/>      
                   </View>
                   <View style={styles.login}>
                       <Image style={styles.avatar} source={require('../image/user/no_login_user.png')}/>
                       <Text style={styles.text}>陈雷请登录/注册</Text>
                   </View>
                </View>
                <View></View>
                <View></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width,
        alignItems:'center',
        height:240
    },
    login:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:18,
        marginBottom:20
    },
    text:{
        marginLeft:12,
        color:'#000'
    },
    avatar:{
        width:50,
        height:50
    },
    set_icon:{
       width:22,
       height:22,
       margin:10
    },
    set:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    header:{
        width:width,
        backgroundColor:'#ffd700'
    }
}) 

export default UserPage;