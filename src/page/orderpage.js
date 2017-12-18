/*
*  @flow
*/
import React,{ Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Login from "../component/login";

class OrderPage extends Component{
    render(){
        return (
           <Login />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}) 

export default OrderPage;