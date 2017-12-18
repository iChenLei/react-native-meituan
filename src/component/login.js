import React,{ Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

class Login extends Component{
    render(){
        return(
            <View>
                 <View style={styles.title_wrapper}><Text style={styles.text_title}>订单</Text></View>
                 <View style={styles.mainWrapper}>   
                        <View style={styles.imageWrapper}>
                            <Image source={require("../image/tool/person.png")} style={styles.image} />
                        </View>
                        <View style={styles.lintWrapper}>
                            <Text>陈雷你还没有登录，请登录后查看订单</Text>
                            <View style={styles.buttonWrapper}>
                                <Text>登录／注册</Text>
                            </View>
                        </View>  
                   </View>  
            </View>    
        )
    }
}

const styles = StyleSheet.create({
        text_title:{
            fontSize:22,
            color:'#000'
        },
        title_wrapper:{
            padding:10
        },
        imageWrapper:{
            marginTop:150,
            alignItems:'center',
            justifyContent:'center',
            borderWidth:3,
            borderColor:'#adadad',
            width:100,
            height:100,
            borderRadius:50
        },
        image:{
            width:50,
            height:50
        },
        lintWrapper:{
            alignItems:'center',
            margin:20
        },
        buttonWrapper:{
            backgroundColor:'#ffd700',
            width:180,
            height:30,
            marginTop:10,
            justifyContent:'center',
            alignItems:'center'
        },
        mainWrapper:{
            justifyContent:'center',
            alignItems:'center'
        }
});

export default Login;