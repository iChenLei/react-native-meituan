import React,{ PureComponent } from 'react';
import {
     Image, 
     StyleSheet,
     Dimensions
 } from "react-native";
const {width,height} = Dimensions.get('window');

 class BannerItem extends PureComponent{
     render(){
         return (
             <Image source={this.props.img} style={styles.image}/>
         )
     }
 }

 const styles = StyleSheet.create({
     image:{
         width:width-20,
         height:80,
         resizeMode:"cover"
     }
 })

 export default BannerItem;